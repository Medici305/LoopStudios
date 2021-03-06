import React from "react";
import "../../node_modules/hover.css/css/hover.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isActive, setIsActive }) => {
  return (
    <section className="header">
      <div className="nav-bar">
        <h1 className="hvr-grow">loopstudios</h1>
        <nav>
          <li className="hvr-underline-from-center">About</li>
          <li className="hvr-underline-from-center">Careers</li>
          <li className="hvr-underline-from-center">Events</li>
          <li className="hvr-underline-from-center">Products</li>
          <li className="hvr-underline-from-center">Support</li>
        </nav>
        < FontAwesomeIcon onClick={() => setIsActive(!isActive)} size='2x' icon={faBars} />
      </div>
      <div className="banner ">
        <div className="box hvr-bounce-to-right">
          <h3>IMMERSIVE EXPERIENCES THAT DELIVER</h3>
        </div>
      </div>
    </section>
  );
};

export default Header;
