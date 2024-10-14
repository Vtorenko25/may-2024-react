import axios from   'axios';
import { IUser } from '../models/IUsers';
// @ts-ignore
import { IResponceModel } from '../models/IResponceModel';
import { IResponcePostsModel } from '../models/IResponcePostsModel';
import { IPost } from '../models/IPost';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

export const userService ={
    getUsers: async () : Promise<IUser[]> =>{
       const axiosResponse = await axiosInstance.get<IResponceModel>('/users');
      const data = axiosResponse.data;
      return data.users;
    }
}

export const postService ={
    getPostsOfUser : async (id:number):Promise<IPost[]> =>{
        const axiosResponce = await axiosInstance.get<IResponcePostsModel>('/posts', {params: {userId:id}})
    return axiosResponce.data.posts;
    }
}