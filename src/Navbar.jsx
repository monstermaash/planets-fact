import React, { useState } from 'react';
import './styles/Navbar.scss';
import './styles/styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onSelectPlanet, selectedPlanet }) => {
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className='navbar'>
      <div className="container">
        <h3>The Planets</h3>
        <button className="hamburger-menu" aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`nav-links ${showMobileMenu ? 'show-nav-links' : ''}`}>
          {planets.map((planet) => (
            <li key={planet}>
              <a
                href="#"
                onClick={() => onSelectPlanet(planet)}
                className={selectedPlanet === planet ? `active-${planet}` : ''}
              >
                {planet}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
