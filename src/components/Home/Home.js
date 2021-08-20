import React from 'react';
import { Navbar } from 'react-bootstrap';
import CurentItem from '../CurentItem/CurentItem';
import Header from '../Header/Header';
import EatingTme from '../Navbar/EatingTme';
import TopBar from '../TopBar/TopBar';


const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
             <EatingTme></EatingTme>
            <CurentItem></CurentItem>
        </div>
    );
};

export default Home;