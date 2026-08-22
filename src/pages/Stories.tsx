import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Story = {
  id: number;
  name: string;
  story: string;
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
      <h1 className="title">Stories</h1>
      {stories.length === 0 ? (
        <p className="slogan">No stories available.</p>
      ) : (
        stories.map((item) => (
          <div key={item.id}>
            <h3 className="text-2xl font-serif">{item.name}</h3>
            <p>{item.story}</p>
          </div>
        ))
      )}
      <button className="button">
        <Link to="/submit-story">Add Story</Link>
      </button>
    </div>
  );
};
export default Stories;
