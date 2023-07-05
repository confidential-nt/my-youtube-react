import { useQuery } from "@tanstack/react-query";
import fetchData from "../utility/fetch_data";
import { FakeUrl, Url } from "../constant/urls";

export default function useChannel(id) {
  const { data: channel, isLoading } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchData(Url.CHANNEL_INFO(id)),
    staleTime: 1000 * 60 * 60 * 24 * 3,
    refetchOnWindowFocus: false,
  });

  if (!id) return [];

  if (isLoading) return [];

  return [channel.items[0]];
}
