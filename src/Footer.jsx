import React, { useEffect, useRef } from 'react';
import planetsData from './data/data.json';
import anime from 'animejs'; // Import animejs for animations
import './styles/Footer.scss';

const Footer = ({ planetName }) => {
  const planetInfo = planetsData.find((planet) => planet.name === planetName);
  const statsRefs = {
    rotation: useRef(null),
    revolution: useRef(null),
    radius: useRef(null),
    temperature: useRef(null)
  };

  useEffect(() => {
    const animateStats = () => {
      Object.entries(statsRefs).forEach(([statKey, ref]) => {
        const target = ref.current;
        if (target) {
          const value = target.innerHTML;
          anime({
            targets: target,
            innerHTML: [0, value],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
          });
        }
      });
    };

    animateStats(); // Trigger the statistics animation when the component mounts or updates
  }, [planetName]); // Re-run the effect when planetName prop changes

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
          <span ref={statsRefs.rotation}>{formatStat(rotation, 'days')}</span>
        </div>
        <div className="stats">
          <p>Revolution Time</p>
          <span ref={statsRefs.revolution}>{formatStat(revolution, 'days')}</span>
        </div>
        <div className="stats">
          <p>Radius</p>
          <span ref={statsRefs.radius}>{formatStat(radius, 'km')}</span>
        </div>
        <div className="stats">
          <p>Average Temp.</p>
          <span ref={statsRefs.temperature}>{formatStat(temperature, '°C')}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
