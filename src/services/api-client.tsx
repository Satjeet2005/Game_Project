import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b59a3b8ce20e4649aa065c28a15e5546",
  },
});
