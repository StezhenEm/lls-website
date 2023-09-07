import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button';
import './Body.css';

const ugaPic = new URL("../image/image-1.jpg", import.meta.url)

const llsPic = new URL("../image/Lightthenight.jpg", import.meta.url)

function Body() {
    return(
        <div className='body-container' >
            <img src={llsPic} alt='Adventure'/> 
            <h1>LLS Club at UGA</h1>
            <p>Leukemia and Lymphoma Society</p>
            <div className='body-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                   GET STARTED 
                </Button>
                <Button2
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                   DONATE 
                </Button2>
            </div>
            
        </div>
    );
}

export default Body;