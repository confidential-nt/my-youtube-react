import React from "react";
import fetchData from "../../utility/fetch_data";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import getVideoId from "../../utility/get_video_id";
import useChannel from "../../hook/use_channel";
import ChannelMark from "../ChannelMark/ChannelMark";

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
      <div className="flex flex-wrap  lg:flex-nowrap">
        <div className="basis-full text-white lg:basis-9/12">
          <iframe
            className="w-full h-96"
            src={`https://www.youtube.com/embed/${video.items[0].id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2 className="text-lg mt-6 mb-4">{video.items[0].snippet.title}</h2>
          <div className="flex mb-6">
            <ChannelMark
              src={channel.snippet.thumbnails.default.url}
              alt={video.items[0].snippet.channelTitle}
              className={"w-6 h-6 rounded-full overflow-hidden mr-1 shrink-0"}
            />
            <h3>{video.items[0].snippet.channelTitle}</h3>
          </div>
          <p className="text-yt-light-grey font-light">
            {video.items[0].snippet.description.slice(0, 150) + " ..."}
          </p>
        </div>
        <ul className="basis-full lg:basis-3/12 lg:ml-2">
          {relatedVideos.items.map((video) => (
            <VideoCard
              video={video}
              key={getVideoId(video)}
              videoId={getVideoId(video)}
              onDetail={true}
            />
          ))}
        </ul>
      </div>
    )
  );
}
