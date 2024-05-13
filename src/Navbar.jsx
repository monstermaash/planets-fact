import React from 'react';
import './styles/Navbar.scss';
import './styles/styles.scss';

const Navbar = ({ onSelectPlanet, selectedPlanet }) => {
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  return (
    <nav className='navbar'>
      <div className="container">
        <h3>The Planets</h3>
        <ul>
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
