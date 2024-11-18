import React from 'react';

export const Dish = ({ dish }) => {
    return (
        <div>
            <div>{dish.name}</div>
            <div>
                {dish.ingredients.map((ingredient, index) => {
                    return (
                        <div key={index} style={{ fontSize: '12px' }}>{ingredient}</div>
                    );
                })}
            </div>
        </div>
    );
};
