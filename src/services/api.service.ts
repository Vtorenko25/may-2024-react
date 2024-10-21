import axios from "axios"
import { IProduct } from "../models/IProduct"

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers:{"Content-Type":"application/json"},
})

export const apiService = {
    product: {
        getAll : async  (page:number) => {
            const skip = (page - 1) * page;
            const axiosResponce = await axiosInstance.get<IProduct[]>('/products/', {
                params:{
                    skip:skip
                }
            });
            console.log(axiosResponce);
}
    }
}