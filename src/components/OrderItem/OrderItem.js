import React from 'react';
import './OrderItem.css';
import Delete from './Images/delete.png';

const OrderItem = props => {
    return (
        <div className='orderItem'>
           <span>{props.name}</span>
            <span>X {props.count}</span>
            <span>{props.price}</span>
            <img src={Delete} alt="#" onClick={props.remove}/>
        </div>
    );
};

export default OrderItem;