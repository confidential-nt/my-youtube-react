import React from "react";
import fetchData from "../../utility/fetch_data";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import getVideoId from "../../utility/get_video_id";
import useChannel from "../../hook/use_channel";

export default function VideoDetail() {
  const [channel] = useChannel();

  const { data: video } = useQuery({
    queryKey: ["video"],
    queryFn: () => fetchData("/data/video_details.json"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const { data: relatedVideos } = useQuery({
    queryKey: ["relatedVideos"],
    queryFn: () => fetchData("/data/related_videos.json"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    video &&
    relatedVideos &&
    channel && (
      <>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.items[0].id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2>{video.items[0].snippet.title}</h2>
        <h3>{video.items[0].snippet.channelTitle}</h3>
        <img src={channel.snippet.thumbnails.default.url} alt="채널 썸네일" />
        <p>{video.items[0].snippet.description.slice(0, 150) + "..."}</p>
        <ul>
          {relatedVideos.items.map((video) => (
            <VideoCard
              video={video}
              key={getVideoId(video)}
              videoId={getVideoId(video)}
            />
          ))}
        </ul>
      </>
    )
  );
}
