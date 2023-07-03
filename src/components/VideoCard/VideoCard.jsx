import React from "react";
import { Link } from "react-router-dom";
import relativeTimeFormat from "../../utility/relative_time_format";
import useChannel from "../../hook/use_channel";

export default function VideoCard({ video, videoId }) {
  const [channel] = useChannel();

  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        default: { url: durl },
      },
    },
  } = video;

  return (
    channel && (
      <li id={videoId}>
        <Link to={`/videos/watch/${videoId}`}>
          <img src={durl} alt={title} />
        </Link>
        <h2>{title}</h2>
        <h4>{channelTitle}</h4>
        <img src={channel.snippet.thumbnails.default.url} alt={channelTitle} />
        <span>{relativeTimeFormat(publishedAt)}</span>
      </li>
    )
  );
}
