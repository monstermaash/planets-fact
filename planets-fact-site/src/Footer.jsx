import React from 'react';
import planetsData from './data/data.json';
import './styles/Footer.scss';

const Footer = ({ planetName }) => {
  const planetInfo = planetsData.find((planet) => planet.name === planetName);

  if (!planetInfo) {
    return null;
  }

  const { rotation, revolution, radius, temperature } = planetInfo;

  const formatStat = (value, unit) => {
    const numericValue = parseFloat(value.replace(',', ''));
    const roundedValue = Math.round(numericValue);
    const formattedValue = roundedValue.toLocaleString();
    return `${formattedValue} ${unit}`;
  };

  return (
    <div className="footer">
      <div className="footer-grid-container">
        <div className="stats">
          <p>Rotation Time</p>
          <span>{formatStat(rotation, 'days')}</span>
        </div>
        <div className="stats">
          <p>Revolution Time</p>
          <span>{formatStat(revolution, 'days')}</span>
        </div>
        <div className="stats">
          <p>Radius</p>
          <span>{formatStat(radius, 'km')}</span>
        </div>
        <div className="stats">
          <p>Average Temp.</p>
          <span>{formatStat(temperature, '°C')}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
