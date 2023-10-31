import React from 'react';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
    /*
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
    */
   
    return(
        <div className='about-container' >
            <h1>Our Executive Board</h1>
            <ul>
        <li>Sohan - President</li>
        <li>Luke Majors - Vice President</li>
        <li>Nikhil Murari - Treasurer</li>
        <li>Nathan Yeboah - Secretary</li>
        <li>Kent Herlihy - Marketing Manager</li>
        <li>Stephen Emoghene - Technology Director</li>
        <li>Drew Lancaster - Communications Director</li>
        <li>Justin Obimpeh - Research and Eductaion Coordinator</li>
        <li>Areen Nagle - Social Media Chair</li>
        <li>Ketan Morrison - Fundraising Chair</li>
        <li>Edgrad Diaz - Co-Advocacy/Policy Chair</li>
        <li>Shaun Price - Co-Advocacy/Policy Chair</li>
    </ul>
        </div>

    );
}

export default AboutUs;