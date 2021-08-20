import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './EatingTime.css';

const EatingTme = () => {
    return (
        <div>
             <nav>
                <a href="">Breakfirst</a>
                <a href="/lunch" className="ReactBootstrap.active">Lunch</a>
                <a href="">Dinner</a>
                <div class="animation start-home"></div>
            </nav>
        </div>
    );
};

export default EatingTme;