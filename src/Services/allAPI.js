import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonAPI";

//1. register api call
export const registerAPI = async(user)=>{
    return await commonAPI("post",`${BASE_URL}/users/register`,user,"")
}

//2. login api call
export const loginAPI = async(user)=>{
    return await commonAPI("post",`${BASE_URL}/users/login`,user,"")
}

//3. Admin login api call
export const adminAPI = async(admin)=>{
    return await commonAPI("post",`${BASE_URL}/admin/login`,admin,"")
}