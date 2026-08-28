import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Story = {
  id: number;
  name: string;
  story: string;
  image: string;
};

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="nav-div">
        <h1 className="slogan">INSPIRING JOURNEYS</h1>
        <p className="title">Stories of Life Restored & Honored</p>
      </div>
      <p>
        Real testimonies from organ recipients, living donors, and courageous
        donor families who chose to give the gift of life.
      </p>
      <button className="button">
        <Link to="/submit-story">Share Your Story</Link>
      </button>
      <div className="stories-grid">
        {stories.length === 0 ? (
          <p className="text-right pb-5 font-semibold">No stories available.</p>
        ) : (
          stories.map((item) => (
            <div className="story-card" key={item.id}>
              <img src={item.image} className="story-image" alt="" />
              <div className="story-content">
                <h3 className="text-2xl font-serif">{item.name}</h3>
                <p>{item.story}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Stories;
