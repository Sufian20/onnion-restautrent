import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as reactBoots from 'react-bootstrap';


const Header = () => {
    return (
        <reactBoots.Row>
            <reactBoots.Col xs={12}>
            <div className="header"> 
                    <h1 className="header-title">Best food wait for your belly</h1>
                      <div className="search-bar">
                            <form action="">
                                <input type="text" className="input-search" placeholder="Search food items"/>
                                <button className="main-btn">Search</button>
                            </form>
                      </div>
                </div>
            </reactBoots.Col>
        </reactBoots.Row>
        
    );
};

export default Header;