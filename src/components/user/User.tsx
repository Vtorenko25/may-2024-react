import React, { FC } from 'react';
import { IUser } from '../../models/IUsers';

type UserProps ={
    item: IUser;
    id:number;
    username:string;
}
const User:FC<UserProps> = (item) => {
    return (
        <div key={item.id}>{item.username}</div>
    );
};

export default User;