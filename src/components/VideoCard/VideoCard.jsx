import React from "react";
import relativeTimeFormat from "../../utility/relative_time_format";

export default function VideoCard({ video, videoId, channel }) {
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        default: { url },
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
    <li id={videoId}>
      <img src={url} alt={title} />
      <h2>{title}</h2>
      <h4>{channelTitle}</h4>
      <img src={channelImageUrl} alt={channelTitle} />
      <span>{relativeTimeFormat(publishedAt)}</span>
    </li>
  );
}
