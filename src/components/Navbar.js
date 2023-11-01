import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faBars, faDroplet, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
//import { Button } from './Button';
//import { Button2 } from './Button';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                    LLS  <FontAwesomeIcon icon={faDroplet} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faXmark : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick= {closeMobileMenu} >
                            About us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pillars' className='nav-links' onClick={closeMobileMenu}>
                            Pillars
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <a
                          href="https://www.instagram.com/llsatuga/"
                          target="_blank"
                          rel="noreferrer"
                          className='nav-links'
                          style={{ color: '#E1306C', fontSize: '24px', padding: '0 10px' }}
                          >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
                {button && <Link to='/donate' className='nav-links' onClick= {closeMobileMenu} >
                            DONATE
                        </Link>}
            </div>
            </nav>  
        </>
    );
}

export default Navbar
