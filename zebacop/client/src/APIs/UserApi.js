import axios from "axios";
import userInstance from "../Instances/UserAxiosInstance";



export const submitForm=(data)=>userInstance.post(`admin/project`,data)

export const getProjects=(project)=>userInstance.get(`admin/getprojects/${project}`)

export const UpdateStatus=(status)=>userInstance.put(`admin/project`,status)

export const ProjectDateUpdate=(data)=>userInstance.put(`admin/projectdateupdate`,data)

export const DeleteProject=(projectId)=>userInstance.delete(`admin/deleteproject/${projectId}`)

export const geAlltProjects=(project)=>userInstance.get(`admin/getAllprojects`)

export const OngoingtProjects=(project)=>userInstance.get(`admin/Ongoingprojects`)

export const EndedProjects=(project)=>userInstance.get(`admin/Ended`)

export const getEditproject=(project)=>userInstance.get(`admin/editproject`)

export const getSingleProjects=(id)=>userInstance.get(`admin/getsingleprojects/${id}`)

export const ProjectEditUpdate=(data)=>userInstance.put(`admin/projectEditUpdate`,data)







