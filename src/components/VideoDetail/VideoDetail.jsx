import React from "react";
import fetchData from "../../utility/fetch_data";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import getVideoId from "../../utility/get_video_id";
import useChannel from "../../hook/use_channel";
import ChannelMark from "../ChannelMark/ChannelMark";
import { FakeUrl, Url } from "../../constant/urls";

export default function VideoDetail() {
  const { id } = useParams();

  const { data: video } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchData(Url.VIDEO_DETAILS(id)),
    staleTime: 1000 * 60 * 60 * 24 * 3,
    refetchOnWindowFocus: false,
  });

  const { data: relatedVideos } = useQuery({
    queryKey: ["relatedVideos"],
    queryFn: () => fetchData(Url.RELATED_VIDEOS(id)),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  const channelId = video ? video.items[0].snippet.channelId : undefined;

  const [channel] = useChannel(channelId);

  return (
    video &&
    relatedVideos &&
    channel && (
      <div className="flex flex-wrap  lg:flex-nowrap">
        <div className="basis-full text-white lg:basis-9/12">
          <iframe
            className="w-full h-96"
            src={`https://www.youtube.com/embed/${id}`}
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
            {video.items[0].snippet.description.slice(0, 150) +
              (video.items[0].snippet.description.length > 150 ? " ..." : "")}
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
