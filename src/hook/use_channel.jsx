import { useQuery } from "@tanstack/react-query";
import fetchData from "../utility/fetch_data";
import { FakeUrl } from "../constant/urls";

export default function useChannel(id) {
  const { data: channel, isLoading } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchData(FakeUrl.CHANNEL_INFO),
    staleTime: 1000 * 60 * 60 * 24 * 3,
    refetchOnWindowFocus: false,
  });

  if (!id) return [];

  if (isLoading) return [];

  return [channel.items[0]];
}
