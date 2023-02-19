import axios from "axios";
import userInstance from "../../Instances/UserAxiosInstance";

export const submitForm=(ApplicationData)=>userInstance.post(`admin/application`,ApplicationData)