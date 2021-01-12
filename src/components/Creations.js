import React from 'react';
import curiosity from '../images/desktop/image-curiosity.jpg';
import deepEarth from '../images/desktop/image-deep-earth.jpg';
import fisheye from '../images/desktop/image-fisheye.jpg';
import fromAbove from '../images/desktop/image-from-above.jpg';
import grid from '../images/desktop/image-grid.jpg';
import nightArcade from '../images/desktop/image-night-arcade.jpg';
import pocketBorealis from '../images/desktop/image-pocket-borealis.jpg';
import soccerTeam from '../images/desktop/image-soccer-team.jpg';

const Creations = () => {
    let list = [curiosity, deepEarth, fisheye, fromAbove, grid, nightArcade, pocketBorealis, soccerTeam];
    return (
        <div className="creation-box">
            <div className="title">
                <h1>OUR CREATIONS</h1>
                <button>SEE ALL</button>
            </div>
            <div className="grid">
                {list.map((image) => <img src={image} />)}
            </div>
        </div>
    )
}

export default Creations;