import React from "react";
import { Link } from "react-router-dom";
import relativeTimeFormat from "../../utility/relative_time_format";
import useChannel from "../../hook/use_channel";
import ChannelMark from "../ChannelMark/ChannelMark";

export default function VideoCard({ video, videoId, onDetail }) {
  const [channel] = useChannel();

  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        high: { url: hurl },
      },
    },
  } = video;

  return (
    channel && (
      <li id={videoId} className="text-white">
        <Link to={`/videos/watch/${videoId}`}>
          <div className={`${onDetail ? "flex" : "block"}`}>
            <div
              className={` ${onDetail ? "basis-1/2 h-24 mr-4" : "h-28 mb-2"}`}
            >
              <img
                src={hurl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`flex ${onDetail ? "basis-1/2" : ""}`}>
              {onDetail || (
                <ChannelMark
                  src={channel.snippet.thumbnails.default.url}
                  alt={channelTitle}
                  className={
                    "w-6 h-6 rounded-full overflow-hidden mr-1 shrink-0"
                  }
                />
              )}
              <div>
                <h2 className={`${onDetail ? "text-xs" : "text-sm"}`}>
                  {title.slice(0, 40) + " ..."}
                </h2>
                <h4
                  className={`${
                    onDetail ? "text-xs" : "text-sm"
                  } text-yt-light-grey`}
                >
                  {channelTitle}
                </h4>
                <span
                  className={`${
                    onDetail ? "text-xs" : "text-sm"
                  } text-yt-light-grey`}
                >
                  {relativeTimeFormat(publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
  );
}
