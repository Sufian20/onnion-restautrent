import React from 'react';
import * as reactBoot from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Manu from '../fakeData/menu';
import { useContext } from 'react';
import { ManuContext } from '../../App';
import CartReview from './CartReview';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { Toast } from 'bootstrap';

const Cart = () => {

    const [cart, setCart] = useContext(ManuContext);

    /// Cart ITEM ADDED
    const [cartR, setCartR] = useState([]);

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const itemKeys = Object.keys(savedCart);
        const CartElement = itemKeys.map(key => {
            const cartItem = Manu.find(item => item.key === key);
            cartItem.quntity = savedCart[key];
            return cartItem;
        });
        setCartR(CartElement);
    },[])


    //============ REMOVED CART ==========

    const reomoveProduct = (productKye) => {
        const newCart = cartR.filter(pd => pd.key !== productKye);
        setCartR(newCart);
        removeFromDatabaseCart(productKye);
    }


    //=============== CART CALCULATION ==================

    //const total = cartR.reduce((total, elem) => total + elem.price, 0);

    let total = 0;
    
    for(let i=0; i < cartR.length; i++){
        const item = cartR[i];
        total = total + item.price * item.quntity;
    }
    

    let shipping = 0;

    if (total > 35) {
        shipping = 44;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = total / 10;

    return (
        <div>
            <reactBoot.Dropdown>
                <reactBoot.Dropdown.Toggle className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} /> {cartR.length}
                </reactBoot.Dropdown.Toggle>

                <reactBoot.Dropdown.Menu>
                    <reactBoot.Dropdown.Item >Manu ordered: {cartR.length}</reactBoot.Dropdown.Item>
                    <reactBoot.Dropdown.Item>

                        {
                            cartR.map(ct => <CartReview cart={ct} reomoveProduct={reomoveProduct} key={ct.id}></CartReview>)
                        }

                    </reactBoot.Dropdown.Item>
                    <reactBoot.Dropdown.Item >SubTotal: {total}</reactBoot.Dropdown.Item>
                    <reactBoot.Dropdown.Item >Shipping: {shipping}</reactBoot.Dropdown.Item>
                    <reactBoot.Dropdown.Item >Tax + Vat : {tax}</reactBoot.Dropdown.Item>
                    <reactBoot.Dropdown.Item >Total: {total + shipping + tax}</reactBoot.Dropdown.Item>
                </reactBoot.Dropdown.Menu>
            </reactBoot.Dropdown>
        </div>
    );
};

export default Cart;