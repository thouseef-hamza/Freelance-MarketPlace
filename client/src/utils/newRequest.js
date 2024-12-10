import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://lionfish-app-omgjk.ondigitalocean.app/api/",
  // baseURL: "http://localhost:8800/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default newRequest;
