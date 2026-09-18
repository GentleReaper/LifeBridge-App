import React, { useState } from "react";

const SubmitStory = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStory = { image, name, story };

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
        setImage("");
        setName("");
        setStory("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="main">
      <div className="nav-div">
        <h1 className="slogan">STORY SUBMISSION</h1>
        <p className="title">Submit Your Transplant Story</p>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="form-section">
          <h2 className="form-section-title">Tell Your Story</h2>
          <div>
            <label className="form-label">Image:</label>
            <input
              className="form-input"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Name:</label>
            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Story:</label>
            <textarea
              className="form-textarea"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              required
            />
          </div>
        </section>
        <button className="button1" type="submit">
          Publish Story
        </button>
      </form>
    </div>
  );
};
export default SubmitStory;
