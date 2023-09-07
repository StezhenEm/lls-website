import React from 'react';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
    const ugaPic = new URL("../image/image-1.jpg", import.meta.url)
    const lukePic = new URL("../image/Luke.jpg", import.meta.url)
    const nikhilPic = new URL("../image/Nikihal.jpg", import.meta.url)
    const sohanPic = new URL("../image/Sohan.jpg", import.meta.url)
    const kentPic = new URL("../image/Kent.jpg", import.meta.url)
    const drewPic = new URL("../image/Drewski.jpg", import.meta.url)
    const stephenPic = new URL("../image/Stephen.jpg", import.meta.url)
    const yeboahPic = new URL("../image/yeboahPic.jpg", import.meta.url)
    const justinPic = new URL("../image/Jobi.jpg", import.meta.url)
    const executives = [
        {image: sohanPic, text: "Sohan, Role: President"},
        {image: lukePic, text: "Luke Majors Role: Vice President"},
        {image: nikhilPic, text: "Nikhil Murari, Role: Treasurer"},
        {image: yeboahPic, text: "Nathan Yeboah, Role: Secretary "},
        {image: kentPic, text: "Kent Herlihy, Role: Marketing Manager"},
        {image: stephenPic, text: "Stephen Emoghene, Role: Technology Director"},
        {image: drewPic, text: "Drew Lancaster, Role: Communications Director"},
        {image: justinPic, text: "Justin Obimpeh, Role: Research and Eductaion Coordinator"}
    ];

    return(
        <div className='about-container' >
            <h1>Meet the Executives!</h1>
            <div className='executives-container'>
                {executives.map((executive, index) => (
                    <div className='executive' key={index}>
                        <img src={executive.image} alt={executive.text} className="photo" />
                        <p>{executive.text}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default AboutUs;