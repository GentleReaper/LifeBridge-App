import { useState } from "react";

const DonorRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [donationType, setDonationType] = useState("");
  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donorData = { fullName, email, phone, bloodType, donationType };
    fetch("http://localhost:3000/donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donorData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Donor registered successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setBloodType("");
        setDonationType("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1 className="title">Donor Registration</h1>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Full Name:</label>
          <br />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Phone:</label>
          <br />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Blood Type:</label>
          <br />
          <input
            type="text"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Donation Type:</label>
          <br />
          <input
            type="text"
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default DonorRegistration;
