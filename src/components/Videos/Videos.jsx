import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import fetchData from "../../utility/fetch_data";
import getVideoId from "../../utility/get_video_id";
import ReactPlaceholder from "react-placeholder";
import VideoCardPlaceholder from "../VideoCardPlaceholder/VideoCardPlaceholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { FakeUrl } from "../../constant/urls";

const NUM_OF_PLACEHOLDER = 15;

export default function Videos() {
  const { keyword } = useParams();

  const { isLoading, data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () =>
      fetchData(keyword ? FakeUrl.SEARCH_RESULTS : FakeUrl.POPULAR_VIDEOS),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <ul className="h-screen grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-2 bg-yt-black">
        {Array.from({ length: NUM_OF_PLACEHOLDER }, (_, index) => (
          <ReactPlaceholder
            ready={!isLoading}
            customPlaceholder={VideoCardPlaceholder}
            showLoadingAnimation={true}
            key={index}
            delay={1000}
          ></ReactPlaceholder>
        ))}
      </ul>
    );
  }

  return (
    videos && (
      <ul className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-2 bg-yt-black">
        {videos.items.map((video) => {
          return (
            <VideoCard
              videoId={getVideoId(video)}
              video={video}
              onDetail={false}
              key={getVideoId(video)}
            />
          );
        })}
      </ul>
    )
  );
}
