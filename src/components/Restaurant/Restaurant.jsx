import React from 'react';
import { Menu } from '../Menu/Menu';

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <div style={{fontWeight: 700, color: 'orange' }}>{restaurant.name}</div>
            <Menu menu={restaurant.menu} />
        </div>
    );
};
