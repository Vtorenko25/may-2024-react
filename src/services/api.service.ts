import axios from "axios"
import { IProduct } from "../models/IProduct"
import { IDJResponce } from "../models/IDJResponce";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers:{"Content-Type":"application/json"},
})

export const apiService = {
    product: {
        getAll : async  (page:number):Promise<IDJResponce & {products: IProduct[]}> => {
            const skip = (page - 1) * page;
            const {data} = await axiosInstance.get<IDJResponce & {products: IProduct[]} >('/products/', {
                params:{
                    skip:skip
                }
            });
            return data;
}
    }
}