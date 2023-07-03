export default function getVideoId(video) {
  return typeof video.id === "object" ? video.id.videoId : video.id;
}
