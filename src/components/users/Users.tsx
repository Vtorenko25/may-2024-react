import React, {useEffect, useState } from 'react';
import { IUser } from '../../models/IUsers';
import { userService } from '../../services/dummyjson.api.service';
import User from '../user/User';

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const getUsers = async () =>{
           setUsers(await userService.getUsers());
        }
        getUsers();
    }, []);
    return (
        <div>
            {
                users.map(value => <User item={value}/>)
            }
        </div>
    );
};

export default Users;