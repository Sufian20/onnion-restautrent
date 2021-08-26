import React from 'react';
import * as reactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {

   // console.log(props);

    return (
        <>
             <reactBootstrap.Row>
                    {
                        props.item.map(elem => {
                            const { id, item_name, des, price, item_image } = elem;

                            return (
                                <reactBootstrap.Col col={12} lg={4} md={6} xs={12} key={id} >
                                    <div className="card-item">
                                        <reactBootstrap.Row>
                                            <div className="img-col ">
                                                <reactBootstrap.Col xs={12} md={12} lg={12}>
                                                    <img src={item_image} alt={item_name}style={{height: "250px"}} />
                                                </reactBootstrap.Col>
                                            </div>
                                            <reactBootstrap.Col xs={12} md={12} lg={12}>
                                                <h6 className="item-name"> <Link style={{textDecoration: "none", color: "#000"}} to = {`/singel-item/${item_name}`} >{item_name}</Link> </h6>
                                                <p className="item-des"> {des}</p>
                                                <h5 className="item-price">$ {price}</h5>
                                            </reactBootstrap.Col>
                                        </reactBootstrap.Row>
                                    </div>
                                </reactBootstrap.Col>
                            )
                        })

                    }
                   

                </reactBootstrap.Row>
        </>
    );
};

export default MenuItems;