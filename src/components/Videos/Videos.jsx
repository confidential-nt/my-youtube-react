import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import fetchData from "../../utility/fetch_data";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});
  const { keyword } = useParams();

  useEffect(() => {
    fetchData(
      `${
        keyword ? "/data/search_result.json" : "/data/most_popular_videos.json"
      }`
    ).then((json) => setVideos(json.items));
    fetchData("/data/channel_info.json").then((json) =>
      setChannel(json.items[0])
    );
  }, [keyword]);

  return (
    videos.length &&
    channel.id && (
      <ul>
        {videos
          .filter((video) => getVideoId(video))
          .map((video) => {
            return (
              <VideoCard
                key={getVideoId(video)}
                videoId={getVideoId(video)}
                video={video}
                channel={channel}
              />
            );
          })}
      </ul>
    )
  );
}

function getVideoId(video) {
  return typeof video.id === "object" ? video.id.videoId : video.id;
}
