import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import fetchData from "../../utility/fetch_data";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    fetchData("/data/most_popular_videos.json").then((json) =>
      setVideos(json.items)
    );
    fetchData("/data/channel_info.json").then((json) =>
      setChannel(json.items[0])
    );
  }, []);

  return (
    videos.length &&
    channel.id && (
      <ul>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} channel={channel} />
        ))}
      </ul>
    )
  );
}
