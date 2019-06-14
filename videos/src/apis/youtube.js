import axios from "axios";

const KEY = "YOUR_KEY_HERE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY
  }
});
