import React from 'react';
import './Button.css';
//import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    function openURL() {
        const url = 'https://docs.google.com/forms/d/e/1FAIpQLScM2LTDK4evWr8030ahSTsgJ2gpMHeKMsYvq___Pr49_MJ8lQ/viewform';
        window.open(url);
    }
    return (
        <div className='btn=mobile'>
            <button
            className ={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={openURL}
            type={type}
            >
                {children}
            </button>
        </div>
    );
};
