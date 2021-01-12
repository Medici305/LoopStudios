import React from 'react';
import interactive from '../images/desktop/image-interactive.jpg';

const Vr = () => {
    return (
        <div className="main-box">
            <div className="image-box">
                <img src={interactive} alt="interactive-vr" />
            </div>
            <div className="text-box">
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning
                creations have transformed businesses through digital experiences that bind
                to their brand.</p>
            </div>
        </div>
    )
}

export default Vr;