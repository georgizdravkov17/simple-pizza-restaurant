import React from 'react';
import './HeaderSection.css';
import img from '../../assets/multiplePizzas.jpeg';

const HeaderSection = () => {
    return(
        <div className="header-section">
             <img src={img}></img>
        </div>
    );
}

export default HeaderSection;