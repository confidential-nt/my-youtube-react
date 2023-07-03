import { useEffect, useState } from "react";
import fetchData from "../utility/fetch_data";

export default function useChannel() {
  const [channel, setChannel] = useState(undefined);

  useEffect(() => {
    fetchData("/data/channel_info.json").then((json) =>
      setChannel(json.items[0])
    );
  }, []);
  return [channel];
}
