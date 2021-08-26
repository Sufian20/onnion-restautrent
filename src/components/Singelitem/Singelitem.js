import { find } from 'async';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/menu';
import * as reactBootstrap from 'react-bootstrap';
import './SingelItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MenuItems from '../CurentItem/MenuItems';
import { useContext } from 'react';
import { ManuContext } from '../../App';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager'

const Singelitem = () => {

    const { itemName } = useParams();
    const item = fakeData.find(elem => elem.item_name === itemName);

    //===========Add to cart==============
    const [cart, setCart] = useContext(ManuContext);

    const handelAddPrduct = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
        const sameItem = newCart.filter(pd => pd.key === item.key);
        const count = sameItem.length;
        addToDatabaseCart(item.key, count);
    }

   /*  const incresedItem = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
        const sameItem = newCart.filter(pd => pd.key === item.key);
        const count = sameItem.length + 1;
        addToDatabaseCart(item.key, count);
    } */

    //============= COUNTER============//
    


    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrementCounter = () => setCounter(1);
    }

    return (
        <div>
            <reactBootstrap.Container>
                <reactBootstrap.Row>
                    <reactBootstrap.Col lg={6} md={12} xs={12}>
                        <div className="itemDetails">
                            <h1>{item.item_name}</h1>
                            <p>{item.des}</p>

                            <reactBootstrap.Row>
                                <reactBootstrap.Col md={6}>
                                    <h1>$ {item.price}</h1>
                                </reactBootstrap.Col>


                                <reactBootstrap.Col md={4}>
                                    <div className="qty">
                                        <ul>
                                        <li onClick={decrementCounter}>-</li>
                                        <li>{counter}</li>
                                        <li onClick={incrementCounter}>+</li>
                                        </ul>
                                    </div>
                                </reactBootstrap.Col>
                            </reactBootstrap.Row>
                            <button className="main-btn" style={{marginTop: "70px"}} onClick={()=>handelAddPrduct(item)}><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                        </div>
                    </reactBootstrap.Col>
                    <reactBootstrap.Col lg={6} md={12} xs={12}>
                        <div className="itemImg">
                            <img src={item.item_image} alt="" />
                        </div>
                    </reactBootstrap.Col>
                </reactBootstrap.Row>
            </reactBootstrap.Container>
        </div>
    );
};

export default Singelitem;