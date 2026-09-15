import { useState } from "react";
import type { RecipientRecord } from "../types/Recipients";

const RecipientRegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const [organNeeded, setOrganNeeded] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const [medicalCondition, setMedicalCondition] = useState("");
  const [medicalNotes, setMedicalNotes] = useState("");

  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [emergencyEmail, setEmergencyEmail] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [consentAgreed, setConsentAgreed] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!consentAgreed) {
      setErrorMsg("You must agree to the consent statement.");
      return;
    }

    setErrorMsg("");

    const newRecipient: RecipientRecord = {
      id: `REC-${Date.now()}`,
      recipientCardId: `RCP-${Date.now()}`,

      fullName,
      email,
      phone,

      dateOfBirth,
      gender,

      organNeeded,
      bloodGroup,

      medicalCondition,
      medicalNotes,

      emergencyContact: {
        name: emergencyName,
        relationship: emergencyRelationship,
        phone: emergencyPhone,
        email: emergencyEmail || undefined,
      },

      city,
      country,

      status: "Pending Verification",

      registeredAt: new Date().toISOString(),

      consentAgreed,
    };

    try {
      const response = await fetch("http://localhost:3000/recipients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipient),
      });

      if (!response.ok) {
        throw new Error("Failed to register recipient.");
      }

      const savedRecipient = await response.json();

      console.log("Recipient registered:", savedRecipient);

      alert("Recipient registration successful!");
    } catch (error) {
      console.error(error);
      setErrorMsg("Something went wrong while registering.");
    }
  };

  return (
    <div>
      <div className="nav-div">
        <h1 className="slogan">RECIPIENT REGISTRATION</h1>

        <p className="title">Register as an organ recipient.</p>
      </div>

      {errorMsg && (
        <div className="mb-6 rounded-lg bg-red-100 p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}
      <form
        className="form-container"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="mb-8 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${
                currentStep === step
                  ? "bg-blue-600 text-white"
                  : currentStep > step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {currentStep === 1 && (
          <section className="form-section">
            <h2 className="form-section-title">Organ Needed</h2>

            <div>
              <label className="form-label">Which organ do you need?</label>

              <select
                value={organNeeded}
                onChange={(e) => setOrganNeeded(e.target.value)}
                className="form-input"
              >
                <option value="">Select an organ</option>
                <option value="Kidney">Kidney</option>
                <option value="Liver">Liver</option>
                <option value="Heart">Heart</option>
                <option value="Lungs">Lungs</option>
                <option value="Pancreas">Pancreas</option>
                <option value="Cornea">Cornea</option>
                <option value="Bone Marrow">Bone Marrow</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="form-label">Blood Group</label>

              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="form-input"
              >
                <option value="">Select blood group</option>
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
          </section>
        )}

        {currentStep === 2 && (
          <section className="form-section">
            <h2 className="form-section-title">Personal Information</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="form-label">Email Address</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="form-label">Phone Number</label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="form-label">Date of Birth</label>

                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Gender</label>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-input"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>
        )}

        {currentStep === 3 && (
          <section className="form-section">
            <h2 className="form-section-title">Medical Information</h2>

            <div>
              <label className="form-label">Medical Condition</label>

              <input
                type="text"
                value={medicalCondition}
                onChange={(e) => setMedicalCondition(e.target.value)}
                className="form-input"
                placeholder="Enter your medical condition"
              />
            </div>

            <div className="mt-6">
              <label className="form-label">
                Additional Medical Information
              </label>

              <textarea
                value={medicalNotes}
                onChange={(e) => setMedicalNotes(e.target.value)}
                className="form-textarea"
                rows={5}
                placeholder="Provide any additional medical information"
              />
            </div>
          </section>
        )}

        {currentStep === 4 && (
          <section className="form-section">
            <h2 className="form-section-title">Emergency Contact</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  value={emergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                  className="form-input"
                  placeholder="Emergency contact name"
                />
              </div>

              <div>
                <label className="form-label">Relationship</label>

                <input
                  type="text"
                  value={emergencyRelationship}
                  onChange={(e) => setEmergencyRelationship(e.target.value)}
                  className="form-input"
                  placeholder="e.g. Parent, Spouse"
                />
              </div>

              <div>
                <label className="form-label">Phone Number</label>

                <input
                  type="tel"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  className="form-input"
                  placeholder="Emergency contact phone"
                />
              </div>

              <div>
                <label className="form-label">Email Address</label>

                <input
                  type="email"
                  value={emergencyEmail}
                  onChange={(e) => setEmergencyEmail(e.target.value)}
                  className="form-input"
                  placeholder="Emergency contact email"
                />
              </div>
            </div>
          </section>
        )}

        {currentStep === 5 && (
          <section className="form-section">
            <h2 className="form-section-title">Location & Consent</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="form-label">City</label>

                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-input"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="form-label">Country</label>

                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-input"
                  placeholder="Enter your country"
                />
              </div>
            </div>

            <label className="mt-8 flex items-start gap-3">
              <input
                type="checkbox"
                checked={consentAgreed}
                onChange={(e) => setConsentAgreed(e.target.checked)}
                className="mt-1 h-5 w-5"
              />

              <span className="text-sm text-gray-700">
                I confirm that the information I have provided is accurate and I
                consent to LifeBridge using this information for organ donation
                and recipient coordination purposes.
              </span>
            </label>
          </section>
        )}

        <div className="flex justify-between border-t border-gray-200 pt-6">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="button"
            >
              Previous
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="button"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-6 mb-6 rounded-lg bg-green-600
       px-6 py-3 font-semibold text-white hover:bg-green-500 
       hover:cursor-pointer"
            >
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecipientRegistrationPage;
