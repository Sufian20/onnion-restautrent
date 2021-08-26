import React from 'react';
import * as reactBootstrap from 'react-bootstrap';
import './CurentItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Menu from '../fakeData/menu';
import { useState } from 'react';
import "animate.css"
import MenuItems from './MenuItems';

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


              <MenuItems item={item}></MenuItems>
            
            </reactBootstrap.Container>
        </div>
    );
};

export default CurentItem;