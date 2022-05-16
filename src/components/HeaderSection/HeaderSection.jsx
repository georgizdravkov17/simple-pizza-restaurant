import React from 'react';
import './HeaderSection.css';
import { img8 } from '../../assets/assets.js';

const HeaderSection = () => {
    return(
        <div className="header-section box-shadow">
             <img src={img8}></img>
        </div>
    );
}

export default HeaderSection;