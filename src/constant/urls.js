export const Url = {
  POPULAR_VIDEOS: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=KR&type=video&key=${process.env.REACT_APP_YT_API_KEY}`,
  SEARCH_RESULTS(keyword) {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&type=video&key=${process.env.REACT_APP_YT_API_KEY}`;
  },
  CHANNEL_INFO(id) {
    return `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${process.env.REACT_APP_YT_API_KEY}`;
  },
  RELATED_VIDEOS(id) {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${id}&maxResults=50&key=${process.env.REACT_APP_YT_API_KEY}`;
  },
  VIDEO_DETAILS(id) {
    return `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_YT_API_KEY}`;
  },
};

export const FakeUrl = {
  POPULAR_VIDEOS: "/data/most_popular_videos.json",
  SEARCH_RESULTS: "/data/search_result.json",
  CHANNEL_INFO: "/data/channel_info.json",
  RELATED_VIDEOS: "/data/related_videos.json",
  VIDEO_DETAILS: "/data/video_details.json",
};
