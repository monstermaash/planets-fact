import React, { useState } from 'react';
import './styles/Navbar.scss';
import './styles/styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onSelectPlanet, selectedPlanet }) => {
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handlePlanetSelect = (planet) => {
    onSelectPlanet(planet);
    setShowMobileMenu(false);
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
                onClick={() => handlePlanetSelect(planet)}
                className={selectedPlanet === planet ? `active-${planet}` : ''}
              >
                {planet}
                <FontAwesomeIcon icon={faChevronRight} className="chevron" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
