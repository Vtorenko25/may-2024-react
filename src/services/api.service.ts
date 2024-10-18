import axios from 'axios';
import { BaseResponceType } from '../models/BaseResponceType';
import { IProduct } from '../models/IProduct';


const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com'
});

export const getProducts = async ():Promise<IProduct[]> =>{
    const {data:{products}}=await axiosInstance.get<BaseResponceType & {products:IProduct[]}>('/products');
    return products;
}
export const getProduct = async (id:string):Promise<IProduct>=>{
const {data} = await axiosInstance.get<IProduct>('/products/' + id);
return data;
}
