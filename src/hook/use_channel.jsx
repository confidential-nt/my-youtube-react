import { useQuery } from "@tanstack/react-query";
import fetchData from "../utility/fetch_data";

export default function useChannel() {
  const { data: channel, isLoading } = useQuery({
    queryKey: ["channel"],
    queryFn: () => fetchData("/data/channel_info.json"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return [];

  return [channel.items[0]];
}
