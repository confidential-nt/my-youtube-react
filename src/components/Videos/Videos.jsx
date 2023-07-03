import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import fetchData from "../../utility/fetch_data";
import getVideoId from "../../utility/get_video_id";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  const { keyword } = useParams();

  useEffect(() => {
    fetchData(
      `${
        keyword ? "/data/search_result.json" : "/data/most_popular_videos.json"
      }`
    ).then((json) => setVideos(json.items));
  }, [keyword]);

  return (
    videos.length && (
      <ul>
        {videos.map((video) => {
          return (
            <VideoCard
              key={getVideoId(video)}
              videoId={getVideoId(video)}
              video={video}
            />
          );
        })}
      </ul>
    )
  );
}
