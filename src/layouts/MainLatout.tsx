import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLatout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLatout;