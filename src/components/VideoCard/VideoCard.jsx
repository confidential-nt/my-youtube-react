import React from "react";
import relativeTimeFormat from "../../utility/relative_time_format";

export default function VideoCard({ video, channel }) {
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        standard: { url },
      },
    },
  } = video;

  const {
    snippet: {
      thumbnails: {
        default: { url: channelImageUrl },
      },
    },
  } = channel;

  return (
    <li>
      <img src={url} alt={title} />
      <h2>{title}</h2>
      <h4>{channelTitle}</h4>
      <img src={channelImageUrl} alt={channelTitle} />
      <span>{relativeTimeFormat(publishedAt)}</span>
    </li>
  );
}
