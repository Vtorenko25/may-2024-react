import React, {useEffect, useState } from 'react';
import { IUser } from '../../models/IUsers';
import { userService } from '../../services/dummyjson.api.service';
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
                users.map(value => <div key={value.id}>{value.username}</div>)
            }
        </div>
    );
};

export default Users;