import axios from "axios";
import userInstance from "../Instances/UserAxiosInstance";

export const submitForm=(data)=>{
    console.log("data..",data)
    userInstance.post(`admin/project`,data)
}

export const getProjects=()=>userInstance.get(`admin/getprojects`)

