import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    function openURL() {
        const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfxpOEAn_YAdRI6Z-4GDQ85mXZ0V4DP1JIdHvf-Vj3Sf-C9DQ/viewform?vc=0&c=0&w=1&flr=0';
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

export const Button2 = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/donate' className='btn=mobile'>
            <button
            className ={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};
