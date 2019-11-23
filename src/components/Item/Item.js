import React from 'react';
import './Item.css';

const Item = props => {
    const nameStyle = {
        fontWeight: "bold",
        color: 'darkblue'
    };
    const priceStyle = {
        color: 'red'
    };

    return (
        <div className='item' onClick={props.add}>
            <img src={props.image} alt="#"/>
            <p style={nameStyle}>{props.name}</p>
            <p style={priceStyle}>Price: {props.price} KGS</p>
        </div>
    );
};

export default Item;