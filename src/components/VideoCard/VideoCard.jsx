import React, { useEffect, useState } from "react";
import relativeTimeFormat from "../../utility/relative_time_format";
import fetchData from "../../utility/fetch_data";

export default function VideoCard({ video, videoId }) {
  const [channel, setChannel] = useState({});

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

  useEffect(() => {
    fetchData("/data/channel_info.json").then((json) =>
      setChannel(json.items[0])
    );
  }, []);

  return (
    channel.id && (
      <li id={videoId}>
        <img src={url} alt={title} />
        <h2>{title}</h2>
        <h4>{channelTitle}</h4>
        <img src={channel.snippet.thumbnails.default.url} alt={channelTitle} />
        <span>{relativeTimeFormat(publishedAt)}</span>
      </li>
    )
  );
}
