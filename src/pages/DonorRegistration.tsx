import { useState } from "react";

const DonorRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [donationType, setDonationType] = useState("");
  const [organs, setOrgans] = useState<string[]>([]);
  const [medicalNotes, setMedicalNotes] = useState("");

  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [consentAgreed, setConsentAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newDonor = {
      fullName,
      email,
      phone,
      dateOfBirth,
      gender,
      bloodType,
      donationType,
      organs,
      medicalNotes,

      emergencyContact: {
        name: emergencyName,
        relationship: emergencyRelationship,
        phone: emergencyPhone,
      },

      city,
      country,
      status: "Pending",
      registeredAt: new Date().toISOString(),
      consentAgreed,
    };

    fetch("http://localhost:3000/donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDonor),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Donor registered successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setDateOfBirth("");
        setGender("");
        setBloodType("");
        setDonationType("");
        setOrgans([]);
        setMedicalNotes("");
        setEmergencyName("");
        setEmergencyRelationship("");
        setEmergencyPhone("");
        setCity("");
        setCountry("");
        setConsentAgreed(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="main">
      <div className="nav-div">
        <h1 className="slogan">ORGAN DONOR PLEDGE</h1>
        <p className="title">
          {" "}
          Register as an organ donor and help give the gift of life.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="form-section">
          <h2 className="form-section-title">Personal Information</h2>

          <div>
            <label className="form-label">Full Name</label>

            <input
              type="text"
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Phone</label>

            <input
              type="tel"
              className="form-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0712345678"
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Date of Birth</label>

            <input
              type="date"
              className="form-input"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Gender</label>

            <select
              className="form-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </section>

        <section className="form-section">
          <h2 className="form-section-title">Donation Information</h2>

          <div>
            <label className="form-label">Blood Type</label>

            <select
              className="form-input"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Select blood type</option>
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

          <div className="mt-5">
            <label className="form-label">Donation Type</label>

            <select
              className="form-input"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
            >
              <option value="">Select donation type</option>
              <option value="Living">Living</option>
              <option value="Deceased">Deceased</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="form-label">Organs You Wish to Donate</label>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Kidney"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOrgans([...organs, e.target.value]);
                    } else {
                      setOrgans(
                        organs.filter((organ) => organ !== e.target.value),
                      );
                    }
                  }}
                />
                Kidney
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Liver"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOrgans([...organs, e.target.value]);
                    } else {
                      setOrgans(
                        organs.filter((organ) => organ !== e.target.value),
                      );
                    }
                  }}
                />
                Liver
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Heart"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOrgans([...organs, e.target.value]);
                    } else {
                      setOrgans(
                        organs.filter((organ) => organ !== e.target.value),
                      );
                    }
                  }}
                />
                Heart
              </label>
            </div>
          </div>

          <div className="mt-5">
            <label className="form-label">Medical Notes</label>

            <textarea
              className="form-textarea"
              rows={5}
              value={medicalNotes}
              onChange={(e) => setMedicalNotes(e.target.value)}
              placeholder="Enter any relevant medical information"
            />
          </div>
        </section>

        <section className="form-section">
          <h2 className="form-section-title">Emergency Contact</h2>

          <div>
            <label className="form-label">Contact Name</label>

            <input
              type="text"
              className="form-input"
              value={emergencyName}
              onChange={(e) => setEmergencyName(e.target.value)}
              placeholder="Emergency contact name"
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Relationship</label>

            <input
              type="text"
              className="form-input"
              value={emergencyRelationship}
              onChange={(e) => setEmergencyRelationship(e.target.value)}
              placeholder="e.g. Brother, Sister, Parent"
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Phone</label>

            <input
              type="tel"
              className="form-input"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              placeholder="Emergency contact phone"
            />
          </div>
        </section>

        <section className="form-section">
          <h2 className="form-section-title">Location</h2>

          <div>
            <label className="form-label">City</label>

            <input
              type="text"
              className="form-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
            />
          </div>

          <div className="mt-5">
            <label className="form-label">Country</label>

            <input
              type="text"
              className="form-input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter your country"
            />
          </div>
        </section>

        <section className="form-section">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={consentAgreed}
              onChange={(e) => setConsentAgreed(e.target.checked)}
              className="mt-1"
            />

            <span>
              I agree to become an organ donor and consent to the information
              provided being used for the LifeBridge registration process.
            </span>
          </label>
        </section>

        <div className="mt-8 text-center">
          <button type="submit" className="button1">
            Register as Donor
          </button>
        </div>
      </form>
    </div>
  );
};
export default DonorRegistration;
