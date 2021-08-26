import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartReview = (props) => {
    //console.log(props);
    const {item_name, quntity, key, price} = props.cart;
    return (
        <div>
            <h6 className="item">{item_name} {price} X {quntity} <FontAwesomeIcon icon={faTrash} onClick={()=> props.reomoveProduct(key)} /> </h6>
          
        </div>
    );
};

export default CartReview;