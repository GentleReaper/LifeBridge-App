import { useEffect, useState } from "react";
import type { Donor } from "../types/Donors";
import { Trash2, Edit } from "lucide-react";

const Donors = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDonors = donors.filter((donor) =>
    donor.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    fetch("http://localhost:3000/donors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch donors");
        }
        return response.json();
      })
      .then((data) => {
        setDonors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg("Unable to load donor records.");
        setLoading(false);
      });
  }, []);

  const [editingDonor, setEditingDonor] = useState<Donor | null>(null);
  const updateDonor = async () => {
    if (!editingDonor) return;

    try {
      const response = await fetch(
        `http://localhost:3000/donors/${editingDonor.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingDonor),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update donor");
      }

      const updatedDonor = await response.json();
      setDonors((currentDonors) =>
        currentDonors.map((donor) =>
          donor.id === updatedDonor.id ? updatedDonor : donor,
        ),
      );

      setEditingDonor(null);
      alert("Donor updated successfully!");
    } catch (error) {
      console.error(error);
      setErrorMsg("Unable to update donor.");
    }
  };

  const deleteDonor = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this donor?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/donors/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete donor.");
      }

      setDonors((currentDonors) =>
        currentDonors.filter((donor) => donor.id !== id),
      );

      alert("Donor deleted successfully!");
    } catch (error) {
      console.error(error);
      setErrorMsg("Unable to delete donor.");
    }
  };

  return (
    <div className="main">
      <div className="nav-div">
        <h1 className="slogan">DONORS RECORDS</h1>
        <p className="title"> Manage registered donors.</p>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder=" Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && (
        <p className="text-center text-gray-600">Loading donor records...</p>
      )}

      {errorMsg && (
        <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
          {errorMsg}
        </div>
      )}

      {!loading && !errorMsg && (
        <div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-md">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Blood Group</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDonors.map((donor) => (
                <tr key={donor.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{donor.fullName}</td>

                  <td className="px-6 py-4">{donor.email}</td>

                  <td className="px-6 py-4">{donor.phone}</td>

                  <td className="px-6 py-4">{donor.bloodGroup}</td>

                  <td className="px-6 py-4">{donor.status}</td>

                  <td className="px-6 py-4">
                    <div className="flex justify-evenly gap-4">
                      <button onClick={() => setEditingDonor(donor)}>
                        <Edit className="text-3xl text-blue-600 hover:cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110" />
                      </button>
                      <button onClick={() => deleteDonor(donor.id)}>
                        <Trash2 className="text-3xl text-red-600 hover:cursor-pointer transition duration-300 hover:text-red-500 hover:scale-110" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {editingDonor && (
        <div className="form-container mb-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="form-section-title">Edit Donor</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="form-label">Full Name</label>

              <input
                type="text"
                value={editingDonor.fullName}
                onChange={(e) =>
                  setEditingDonor({
                    ...editingDonor,
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
                value={editingDonor.email}
                onChange={(e) =>
                  setEditingDonor({
                    ...editingDonor,
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
                value={editingDonor.phone}
                onChange={(e) =>
                  setEditingDonor({
                    ...editingDonor,
                    phone: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Blood Group</label>

              <select
                value={editingDonor.bloodGroup}
                onChange={(e) =>
                  setEditingDonor({
                    ...editingDonor,
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
                value={editingDonor.status}
                onChange={(e) =>
                  setEditingDonor({
                    ...editingDonor,
                    status: e.target.value,
                  })
                }
                className="form-input"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-evenly">
            <button onClick={() => updateDonor()} className="button1">
              Update Donor
            </button>

            <button onClick={() => setEditingDonor(null)} className="button">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Donors;
