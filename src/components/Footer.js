import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <h1>loopstudios</h1>
                <nav>
                    <li className="hvr-underline-from-center">About</li>
                    <li className="hvr-underline-from-center">Careers</li>
                    <li className="hvr-underline-from-center">Events</li>
                    <li className="hvr-underline-from-center">Products</li>
                    <li className="hvr-underline-from-center">Support</li>
                </nav>
            </div>
            <div className="right">
                <div className="icons">
                    < FontAwesomeIcon size='2x' icon={faFacebook} />
                    < FontAwesomeIcon size='2x' icon={faTwitter} />
                    < FontAwesomeIcon size='2x' icon={faPinterest} />
                    < FontAwesomeIcon size='2x' icon={faInstagram} />
                </div>
                <p> < FontAwesomeIcon icon={faCopyright} /> 2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;