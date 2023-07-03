import React, { useEffect, useState } from "react";
import fetchData from "../../utility/fetch_data";
import useChannel from "../../hook/use_channel";
import VideoCard from "../VideoCard/VideoCard";
import getVideoId from "../../utility/get_video_id";

export default function VideoDetail() {
  const [video, setVideo] = useState(undefined);
  const [relatedVideos, setVideos] = useState([]);
  const [channel] = useChannel();

  useEffect(() => {
    fetchData("/data/video_details.json").then((json) =>
      setVideo(json.items[0])
    );

    fetchData("/data/related_videos.json").then((json) =>
      setVideos(json.items)
    );
  }, []);

  return (
    video &&
    relatedVideos.length && (
      <>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <img src={channel.snippet.thumbnails.default.url} alt="채널 썸네일" />
        <p>{video.snippet.description.slice(0, 150) + "..."}</p>
        <ul>
          {relatedVideos.map((video) => (
            <VideoCard
              video={video}
              key={getVideoId(video)}
              id={getVideoId(video)}
            />
          ))}
        </ul>
      </>
    )
  );
}
