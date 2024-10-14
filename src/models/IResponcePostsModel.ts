import {IPost} from "./IPost"

export interface IResponcePostsModel{
    posts:IPost[];
    total:number;
    skip:number;
    limit:number
}