import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import fetchData from "../../utility/fetch_data";
import getVideoId from "../../utility/get_video_id";

export default function Videos() {
  const { keyword } = useParams();

  const { data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () =>
      fetchData(
        `${
          keyword
            ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&type=video&key=${process.env.REACT_APP_YT_API_KEY}`
            : `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=KR&type=video&key=${process.env.REACT_APP_YT_API_KEY}`
        }`
      ),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  return (
    videos && (
      <ul className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-2">
        {videos.items.map((video) => {
          return (
            <VideoCard
              key={getVideoId(video)}
              videoId={getVideoId(video)}
              video={video}
              onDetail={false}
            />
          );
        })}
      </ul>
    )
  );
}
