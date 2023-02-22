import axios from 'axios'
const baseURL="http://localhost:5000/"

const defaultOption={
    baseURL:baseURL,
    headers:{
        "Content-Type": "multipart/form-data",
    }
}
let userInstance=axios.create(defaultOption);
// userinstance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("userToken");
//     config.headers.accesstoken = token;
//     return config;
//   });
export default userInstance;