import React from 'react';

const reviewItem = (props) => {
    const { name, price, shipping, quantity } = props.product;
    return (
        <div>
            <h3>This is a review item: {name}</h3>
        </div>
    );
};

export default reviewItem;