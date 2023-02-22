import axios from "axios";
import userInstance from "../Instances/UserAxiosInstance";



export const submitForm=(data)=>userInstance.post(`admin/project`,data)

export const getProjects=(project)=>userInstance.get(`admin/getprojects/${project}`)

export const UpdateStatus=(status)=>userInstance.put(`admin/project`,status)

export const ProjectDateUpdate=(data)=>userInstance.put(`admin/projectdateupdate`,data)

