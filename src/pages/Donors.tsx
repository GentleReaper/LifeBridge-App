import { useEffect, useState } from "react";
import { type Donor } from "../types/Donors";

const Donors = () => {
  const [donors, setDonors] = useState<Donor[]>([]);

  const updateDonor = (id: string) => {
    fetch(`http://localhost:3000/donors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Verified" }),
    })
      .then((response) => response.json())
      .then((updatedDonor) => {
        console.log("Updated Donor:", updatedDonor);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/donors")
      .then((response) => response.json())
      .then((data) => setDonors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Donors</h1>
      {donors.map((donor) => (
        <div key={donor.id}>
          <h3>{donor.fullName}</h3>
          <p>{donor.email}</p>
          <p>{donor.phone} </p>
          <p>{donor.bloodType}</p>
          <p>{donor.donationType}</p>

          <button onClick={() => updateDonor(donor.id)}>Verify Donor</button>
        </div>
      ))}
    </div>
  );
};
export default Donors;
