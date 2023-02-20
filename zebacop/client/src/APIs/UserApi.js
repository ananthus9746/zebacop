import axios from "axios";
import userInstance from "../Instances/UserAxiosInstance";

export const submitForm=(data)=>userInstance.post(`admin/project`,data)


export const getProjects=()=>userInstance.get(`admin/getprojects`)

export const UpdateStatus=(accepted)=>userInstance.put(`admin/project`,accepted)

