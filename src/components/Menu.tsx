import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'products'}>products</Link></li>
            </ul>

        </div>
    );
};

export default Menu;