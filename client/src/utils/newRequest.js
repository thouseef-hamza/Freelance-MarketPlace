import axios from "axios";

//backend port number
const newRequest=axios.create({
    baseURL:"https://freelance-market-place.vercel.app/api/",
    withCredentials:true,
})

export default newRequest;
