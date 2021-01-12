import React from "react";
import curiosity from "../images/desktop/image-curiosity.jpg";
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import fisheye from "../images/desktop/image-fisheye.jpg";
import fromAbove from "../images/desktop/image-from-above.jpg";
import grid from "../images/desktop/image-grid.jpg";
import nightArcade from "../images/desktop/image-night-arcade.jpg";
import pocketBorealis from "../images/desktop/image-pocket-borealis.jpg";
import soccerTeam from "../images/desktop/image-soccer-team.jpg";

const Creations = () => {
    let list = [
        {
            image: curiosity,
            text: 'the curiosity'
        },
        {
            image: deepEarth,
            text: 'deep earth'
        },
        {
            image: fisheye,
            text: 'make it fisheye'
        },
        {
            image: fromAbove,
            text: 'from up above vr'
        },
        {
            image: grid,
            text: 'the grid'
        },
        {
            image: nightArcade,
            text: 'night arcade'
        },
        {
            image: pocketBorealis,
            text: 'pocket borealis'
        },
        {
            image: soccerTeam,
            text: 'soccer team vr'
        },
    ];
    return (
        <div className="creation-box">
            <div className="title">
                <h1>OUR CREATIONS</h1>
                <button>SEE ALL</button>
            </div>
            <div className="grid">
                {list.map((images) => (
                    <div className="grid-box">
                        <img src={images.image} alt={images.text} />
                        <h2>{images.text}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Creations;
