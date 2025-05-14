import axios from 'axios';


const axiosInstance = axios.create({
    baseUrl: "http://localhost:5000/api"
})


export default axiosInstance;

// add a request interceptor
// axiosInstance.interceptors.request.use(
//     (config) =>{

//     }
// )


