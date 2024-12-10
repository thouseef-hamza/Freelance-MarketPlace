import axios from "axios";

//backend port number
const newRequest=axios.create({
    baseURL:"https://lionfish-app-omgjk.ondigitalocean.app/api/",
    withCredentials:true,
})

export default newRequest;
