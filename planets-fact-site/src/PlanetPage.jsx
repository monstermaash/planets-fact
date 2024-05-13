import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import planetsData from './data/data.json';
import TabView from './TabView';

import './styles/PlanetPage.scss';

const PlanetPage = ({ planetName }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [planetInfo, setPlanetInfo] = useState(null);
  const [planetImage, setPlanetImage] = useState(null);

  useEffect(() => {
    const loadPlanetInfo = () => {
      const planetInfoData = planetsData.find((planet) => planet.name.toLowerCase() === planetName.toLowerCase());
      if (planetInfoData) {
        const planetImageSrc = planetInfoData.images.planet;
        setPlanetInfo(planetInfoData);
        setPlanetImage(planetImageSrc);
        setActiveTab('overview');
      } else {
        setPlanetInfo(null);
        setPlanetImage(null);
      }
    };

    loadPlanetInfo(); 
  }, [planetName]); 

  useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      titleElement.innerHTML = planetName.split('').map((letter) => {
        return `<span class="animLetter">${letter}</span>`;
      }).join('');
      anime.timeline().add({
        targets: '.animLetter',
        translateY: ['1.1em', 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        opacity: [0, 1],
        duration: 750,
        delay: (el, i) => 50 * i,
        easing: 'easeOutExpo'
      });
    }

    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        translateX: [-200, 0],
        translateY: [-200, 0],
        scale: [4, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)',
      });
    }
  }, [planetName]); 

  const handleTabChange = (tab, imageUrl) => {
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        translateX: [0, 200],
        translateY: [0, -200],
        scale: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => {
          setPlanetImage(imageUrl); 
          setActiveTab(tab); 
          anime({
            targets: imageRef.current,
            translateX: [-200, 0],
            translateY: [-200, 0],
            scale: [4, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutElastic(1, .8)',
          });
        }
      });
    }
  };

  return (
    <div className="planet-page">
      <div className="grid-container">
        <div className="image-section">
          <img ref={imageRef} src={planetImage} alt={planetInfo?.name} />
        </div>
        <div className="info-section">
          <h1 className="planet__title" ref={titleRef}>
            {planetName}
          </h1>
          <TabView
            planetInfo={planetInfo}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetPage;