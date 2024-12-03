import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-market-place.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
