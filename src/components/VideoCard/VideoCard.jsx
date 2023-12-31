import React, { memo } from "react";
import { Link } from "react-router-dom";
import relativeTimeFormat from "../../utility/relative_time_format";
import useChannel from "../../hook/use_channel";
import ChannelMark from "../ChannelMark/ChannelMark";
import Clock from "../../utility/clock";

const VideoCard = memo(({ video, videoId, onDetail }) => {
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        high: { url: hurl },
      },
      channelId,
    },
  } = video;

  const [channel] = useChannel(channelId);

  return (
    channel && (
      <li id={videoId} className={`text-white ${onDetail ? "mb-2" : ""}`}>
        <Link to={`/videos/watch/${videoId}`}>
          <div className={`${onDetail ? "flex" : "block"}`}>
            <div
              className={` ${onDetail ? "basis-1/2 h-24 mr-4" : "h-28 mb-2"}`}
            >
              <img
                src={hurl}
                alt={title}
                className="block w-full h-full object-cover"
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
                  {title.slice(0, 30) + (title.length > 30 ? " ..." : "")}
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
                  {relativeTimeFormat(publishedAt, new Clock())}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
  );
});

export default VideoCard;
