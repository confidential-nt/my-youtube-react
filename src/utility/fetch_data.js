export default async function fetchData(url) {
  const response = await fetch("/data/most_popular_videos.json");
  const json = await response.json();
  return json;
}
