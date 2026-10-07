import { useEffect, useState } from "react";
import type { RecipientRecord } from "../types/Recipients";

const Recipients = () => {
  const [recipients, setRecipients] = useState<RecipientRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingRecipient, setEditingRecipient] =
    useState<RecipientRecord | null>(null);

  const filteredRecipients = recipients.filter((recipient) =>
    recipient.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipients");
        if (!response.ok) {
          throw new Error("Failed to fetch recipients");
        }

        const data: RecipientRecord[] = await response.json();
        setRecipients(data);
      } catch (error) {
        console.error(error);
        setErrorMsg("Unable to load recipient records.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipients();
  }, []);

  const updateRecipient = async () => {
    if (!editingRecipient) return;

    try {
      const response = await fetch(
        `http://localhost:3000/recipients/${editingRecipient.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingRecipient),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update recipient");
      }

      const updatedRecipient: RecipientRecord = await response.json();
      setRecipients((currentRecipients) =>
        currentRecipients.map((recipient) =>
          recipient.id === updatedRecipient.id ? updatedRecipient : recipient,
        ),
      );

      setEditingRecipient(null);
      alert("Recipient updated successfully!");
    } catch (error) {
      console.error(error);
      setErrorMsg("Unable to update recipient.");
    }
  };

  const deleteRecipient = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this recipient record?",
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:3000/recipients/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete recipient");
      }

      setRecipients((currentRecipients) =>
        currentRecipients.filter((recipient) => recipient.id !== id),
      );
      alert("Recipient deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete recipient.");
    }
  };

  return (
    <div className="main">
      <div className="nav-div">
        <h1 className="slogan">RECIPIENTS RECORDS</h1>
        <p className="title">List of registered recipients.</p>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-gray-600">Loading recipient records...</p>}

      {errorMsg && <p className="text-red-600">{errorMsg}</p>}

      {!loading && !errorMsg && (
        <div className="overflow-x-auto rounded-xl bg-white shadow">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Organ Needed</th>
                <th className="px-6 py-4">Blood Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRecipients.map((recipient) => (
                <tr key={recipient.id} className="border-t hover:bg-gray-200">
                  <td className="px-6 py-4 font-medium">
                    {recipient.fullName}
                  </td>
                  <td className="px-6 py-4">{recipient.email}</td>
                  <td className="px-6 py-4">{recipient.phone}</td>
                  <td className="px-6 py-4">{recipient.organNeeded}</td>
                  <td className="px-6 py-4">{recipient.bloodGroup}</td>
                  <td className="px-6 py-4">{recipient.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingRecipient(recipient)}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRecipient(recipient.id)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingRecipient && (
        <div className="form-container mb-8">
          <h2 className="form-section-title">Edit Recipient</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="form-label">Full Name</label>

              <input
                type="text"
                value={editingRecipient.fullName}
                onChange={(e) =>
                  setEditingRecipient({
                    ...editingRecipient,
                    fullName: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Email</label>

              <input
                type="email"
                value={editingRecipient.email}
                onChange={(e) =>
                  setEditingRecipient({
                    ...editingRecipient,
                    email: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Phone</label>

              <input
                type="tel"
                value={editingRecipient.phone}
                onChange={(e) =>
                  setEditingRecipient({
                    ...editingRecipient,
                    phone: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Organ Needed</label>

              <select
                value={editingRecipient.organNeeded}
                onChange={(e) =>
                  setEditingRecipient({
                    ...editingRecipient,
                    organNeeded: e.target.value,
                  })
                }
                className="form-input"
              >
                <option value="Kidney">Kidney</option>
                <option value="Liver">Liver</option>
                <option value="Heart">Heart</option>
                <option value="Lungs">Lungs</option>
                <option value="Pancreas">Pancreas</option>
                <option value="Cornea">Cornea</option>
                <option value="Bone Marrow">Bone Marrow</option>
              </select>
            </div>

            <div>
              <label className="form-label">Blood Group</label>

              <select
                value={editingRecipient.bloodGroup}
                onChange={(e) =>
                  setEditingRecipient({
                    ...editingRecipient,
                    bloodGroup: e.target.value,
                  })
                }
                className="form-input"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label className="form-label">Status</label>

              <select
                value={editingRecipient.status}
                onChange={(e) =>
                  setEditingRecipient({
                    ...editingRecipient,
                    status: e.target.value as RecipientRecord["status"],
                  })
                }
                className="form-input"
              >
                <option value="Pending Verification">
                  Pending Verification
                </option>

                <option value="Verified Recipient">Verified Recipient</option>

                <option value="In Review">In Review</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button type="button" onClick={updateRecipient} className="button1">
              Update Recipient
            </button>

            <button
              type="button"
              onClick={() => setEditingRecipient(null)}
              className="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Recipients;
