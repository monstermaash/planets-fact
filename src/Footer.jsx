import React from 'react';
import planetsData from './data/data.json';
import './styles/Footer.scss';
import './styles/styles.scss';


const Footer = ({ planetName }) => {
  // Find the planet info based on the planetName prop
  const planetInfo = planetsData.find((planet) => planet.name === planetName);

  if (!planetInfo) {
    return null;
  }

  const { rotation, revolution, radius, temperature } = planetInfo;

  return (
    <div className="footer">
      <div className='footer-grid-container'>
        <div className='stats'>
          <p>Rotation Time</p>
          <span>{rotation}</span>
        </div>
        <div className='stats'>
          <p>Revolution Time</p>
          <span>{revolution}</span>
        </div>
        <div className='stats'>
          <p>Radius</p>
          <span>{radius}</span>
        </div>
        <div className='stats'>
          <p>Average Temp.</p>
          <span>{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

