import { IUser } from "./IUsers";

export interface IResponceUsersModel {
    users: IUser[],
    total:number,
    skip:number,
    limit:number
}