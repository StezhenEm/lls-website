import React from 'react';
import '../App.css';
import './Pillars.css';

function Pillars() {
    return(
        <div className='pillar-container' >
            <div className="pillar-item">
                <h2>Awareness</h2>
                <p>Our club is dedicated to raising awareness about blood cancers such as leukemia and lymphoma. We do this through events, social media sharing, and advocacy for local LLS policies.</p>
            </div>
            <div className="pillar-item">
                <h2>Fundraising</h2>
                <p>Our club aims to raise funds and attract volunteers for our cause through various school fundraisers such as the Light the Night Event.</p>
            </div>
            <div className="pillar-item">
                <h2>Patient Support</h2>
                <p>Our club fosters a supportive community for those impacted by blood cancers, promoting belonging and equality. We work with local hospitals for patient care opportunities.</p>
            </div>
        </div>
    );
}

export default Pillars;
