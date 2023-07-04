import { useQuery } from "@tanstack/react-query";
import fetchData from "../utility/fetch_data";

export default function useChannel(id) {
  const { data: channel, isLoading } = useQuery({
    queryKey: ["channel", id],
    queryFn: () =>
      fetchData(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${process.env.REACT_APP_YT_API_KEY}`
      ),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (!id) return [];

  if (isLoading) return [];

  return [channel.items[0]];
}
