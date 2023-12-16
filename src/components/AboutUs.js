import React from 'react';
import '../App.css';
import './AboutUs.css';

import sohanImage from "../image/Sohan.jpg"
import lukeImage from "../image/Luke.jpg"
import nikhilImage from "../image/Nikihal.jpg"
import nathanImage from "../image/yeboahPic.jpg"
import kentImage from "../image/Kent.jpg"
import stephenImage from "../image/Stephen.jpg"
import drewImage from "../image/Drewski.jpg"
import justinImage from "../image/Jobi.jpg"
import areenImage from "../image/areen.png"
import ketanImage from "../image/ketan.png"
import edgardImage from "../image/edgard.png"
import shaunImage from "../image/shaun.png"

function AboutUs() {
    const boardMembers = [
        {name: 'Sohan', position: 'President', imageUrl:sohanImage},
        {name: 'Luke', position: 'Vice-President', imageUrl:lukeImage},
        {name: 'Nikhil', position: 'Treasurer', imageUrl:nikhilImage},
        {name: 'Nathan', position: 'Secretary', imageUrl:nathanImage},
        {name: 'Kent', position: 'Events and Outreach Coordinator', imageUrl:kentImage},
        {name: 'Stephen', position: 'Technology Director', imageUrl:stephenImage},
        {name: 'Drew', position: 'Communications Director', imageUrl:drewImage},
        {name: 'Justin', position: 'Research and Education Coordinator', imageUrl:justinImage},
        {name: 'Areen', position: 'Social Media and Marketing Coordinator', imageUrl:areenImage},
        {name: 'Ketan', position: 'Fundraising Chair', imageUrl:ketanImage},
        {name: 'Edgard', position: 'Advocacy and Policy Co-Chair', imageUrl:edgardImage},
        {name: 'Shaun', position: 'Advocacy and Policy Co-Chair', imageUrl:shaunImage},
    ]

    return (
        <div className='about-container'>
            <h1>Our Executive Board</h1>
            <div className="board-grid">
                {boardMembers.map(member => (
                    <div className="board-member" key={member.name}>
                        <div className="board-image-container">
                            <img src={member.imageUrl} alt={member.name} className="board-image"/>
                        </div>
                        <div className="board-info">
                            <strong>{member.position}</strong>
                            <p>{member.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;