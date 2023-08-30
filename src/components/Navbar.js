import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faBars, faDroplet, faXmark} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';

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
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
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
                        <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                            News
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>DONATE</Button>}
            </div>
            </nav>  
        </>
    );
}

export default Navbar
