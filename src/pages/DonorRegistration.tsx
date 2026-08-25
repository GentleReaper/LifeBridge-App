import { useState } from "react";

const DonorRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donorData = { fullName, email, phone };
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
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="nav-div">
        <h1 className="slogan">ORGAN DONOR PLEDGE</h1>
        <p>Organ Donor Registration Form</p>
      </div>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Full Name:</label>
          <br />
          <input
            className="input"
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
            className="input"
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
            className="input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <br />
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default DonorRegistration;
