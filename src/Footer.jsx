import React, { useEffect, useRef } from 'react';
import planetsData from './data/data.json';
import anime from 'animejs';
import './styles/Footer.scss';

const Footer = ({ planetName }) => {
  const planetInfo = planetsData.find((planet) => planet.name === planetName);

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
          round: 1,
          duration: 1000
        });
      }
    };

    if (planetInfo) {
      animateStat(rotationRef, planetInfo.rotation);
      animateStat(revolutionRef, planetInfo.revolution);
      animateStat(radiusRef, planetInfo.radius);
      animateStat(temperatureRef, planetInfo.temperature);
    }
  }, [planetInfo, planetName]);

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
