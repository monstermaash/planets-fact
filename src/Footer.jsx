import React, { useEffect, useRef } from 'react';
import planetsData from './data/data.json';
import anime from 'animejs'; // Import animejs for animations
import './styles/Footer.scss';

const Footer = ({ planetName }) => {
  const planetInfo = planetsData.find((planet) => planet.name === planetName);

  // Refs for each stat element
  const rotationRef = useRef(null);
  const revolutionRef = useRef(null);
  const radiusRef = useRef(null);
  const temperatureRef = useRef(null);

  useEffect(() => {
    const animateStat = (ref, value) => {
      if (ref.current) {
        anime({
          targets: ref.current,
          innerHTML: [0, value],
          easing: 'linear',
          round: 1, // Round the animated value to 1 decimal
          duration: 1000 // Set animation duration to 1 second
        });
      }
    };

    // Animate each stat when planetInfo or planetName changes
    if (planetInfo) {
      animateStat(rotationRef, planetInfo.rotation);
      animateStat(revolutionRef, planetInfo.revolution);
      animateStat(radiusRef, planetInfo.radius);
      animateStat(temperatureRef, planetInfo.temperature);
    }
  }, [planetInfo, planetName]); // Re-run effect when planetInfo or planetName changes

  if (!planetInfo) {
    return null;
  }

  return (
    <div className="footer">
      <div className="footer-grid-container">
        <div className="stats">
          <p>Rotation Time</p>
          <span ref={rotationRef}>{planetInfo.rotation}</span>
        </div>
        <div className="stats">
          <p>Revolution Time</p>
          <span ref={revolutionRef}>{planetInfo.revolution}</span>
        </div>
        <div className="stats">
          <p>Radius</p>
          <span ref={radiusRef}>{planetInfo.radius}</span>
        </div>
        <div className="stats">
          <p>Average Temp.</p>
          <span ref={temperatureRef}>{planetInfo.temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
