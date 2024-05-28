import axios from "axios";

const axiosInstance = axios.create({
  // localinstance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-1d334/us-central1/api",
  // deployed version of amazone server on render.com
  baseURL: "https://amazone-api-deploy-pnco.onrender.com",
});

export { axiosInstance };
