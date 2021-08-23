import React from 'react';
import * as reactBootstrap from 'react-bootstrap';
import './CurentItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Menu from '../fakeData/menu';
import { useState } from 'react';
import "animate.css"

const CurentItem = () => {
    
    const [item, setItem] = useState(Menu);
    
    const filtterItem = (categoryItem) => {
        const uplodItems = Menu.filter(curEle => {
            return curEle.category_name === categoryItem
        });
        setItem(uplodItems)
    }

    return (
        <div>
            <reactBootstrap.Container>
                <div className="Eating-time" style={{ textAlign: "center" }}>
                    <ul>
                        <li className="animate__backInLeft"  onClick={()=> filtterItem('breakfirst')}>Breakfirst</li>
                        <li className="active" onClick={()=> filtterItem('lunch')}>Lunch</li>
                        <li onClick={()=> filtterItem('dinner')}>Dinner</li>
                        <li className="animation"></li>
                    </ul>
                </div>


                <reactBootstrap.Row>
                    {
                        item.map(elem => {
                            const { id, item_name, des, price, item_image } = elem;

                            return (
                                <reactBootstrap.Col col={12} lg={4} md={6} xs={12}  >
                                    <div className="card-item">
                                        <reactBootstrap.Row>
                                            <div className="img-col ">
                                                <reactBootstrap.Col xs={12} md={12} lg={12}>
                                                    <img src={item_image} alt={item_name}style={{height: "250px"}} />
                                                </reactBootstrap.Col>
                                            </div>
                                            <reactBootstrap.Col xs={12} md={12} lg={12}>
                                                <h6 className="item-name animate__backInLeft">{item_name}</h6>
                                                <p className="item-des"> {des}</p>
                                                <h5 className="item-price">$ {price}</h5>
                                            </reactBootstrap.Col>
                                        </reactBootstrap.Row>
                                    </div>
                                </reactBootstrap.Col>
                            )
                        })

                    }
                    <reactBootstrap.Col lg={12} md={12} sm={12}>
                         <buttton className="btn-cart">Checkout</buttton>
                    </reactBootstrap.Col>

                </reactBootstrap.Row>
            
            </reactBootstrap.Container>
        </div>
    );
};

export default CurentItem;