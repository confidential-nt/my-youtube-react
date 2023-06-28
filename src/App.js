import Header from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import fetchData from "./utility/fetch_data";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData("/data/most_popular_videos.json").then((json) =>
      setVideos(json.items)
    );
  }, []);

  return (
    <>
      <Header />
      <main>
        {videos.map((vldeo) => (
          <li>video.id</li>
        ))}
      </main>
    </>
  );
}

export default App;
