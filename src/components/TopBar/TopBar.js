import React from 'react';
import * as reactBoot from 'react-bootstrap';
import logo from '../../images/logo.png'
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    return (
        <reactBoot.Container>
            <div className="topBar">

                <reactBoot.Row>
                    <reactBoot.Col xs={4}>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </reactBoot.Col>
                    <reactBoot.Col xs={8}>
                        <div className="top-components">
                            <ul>
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li>Login</li>
                                <li> <button className="main-btn">Sign up</button></li>
                            </ul>
                            
                            
                           
                        </div>
                    </reactBoot.Col>

                </reactBoot.Row>

            </div>
        </reactBoot.Container>
    );
};

export default TopBar;