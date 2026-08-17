import { useEffect, useState } from "react";

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
      <h1>Stories</h1>
      {stories.length === 0 ? (
        <p>No stories available.</p>
      ) : (
        stories.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.story}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default Stories;
