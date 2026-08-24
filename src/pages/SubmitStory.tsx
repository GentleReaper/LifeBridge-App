import React, { useState } from "react";

const SubmitStory = () => {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStory = { name, story };

    fetch("http://localhost:3000/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStory),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Story submitted successfully!");
        setName("");
        setStory("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1 className="title">Submit a Story</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Story:</label>
          <br />
          <textarea
            className="input"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            required
          />
        </div>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SubmitStory;
