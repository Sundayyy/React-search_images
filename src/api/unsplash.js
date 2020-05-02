import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CXJeTqYpNXIlw2J4dq98HeGegZXvrwCCMRtaxHujlxo",
  },
});
