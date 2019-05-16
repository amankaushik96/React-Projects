import axios from "axios";

const KEY = "AIzaSyCl9GQ7BJiocnc-nTpPgvRuSIx2cRYICFk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY
  }
});
