import React from 'react';
import '../App.css';
import './Pillars.css';

const pillar = new URL("../image/Pillars.jpg", import.meta.url)
function Pillars() {
    return(
        <div className='body-container' >
            <img src={pillar} alt='pillars'/> 
            
        </div>
    );
}

export default Pillars;