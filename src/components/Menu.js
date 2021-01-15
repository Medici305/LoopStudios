import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ isActive, setIsActive }) => {
    return (
        <div className={`menu ${isActive ? 'drop-down' : 'close'}`}>
            <div className="nav">
                <h1>loopstudios</h1>
                <button onClick={() => setIsActive(!isActive)}>
                    <FontAwesomeIcon size='2x' icon={faTimes} />
                </button>
            </div>
            <div className="list">
                <li>ABOUT</li>
                <li>CAREERS</li>
                <li>EVENTS</li>
                <li>PRODUCTS</li>
                <li>SUPPORT</li>
            </div>
        </div>
    )
}

export default Menu;