import React from 'react';
import planetsData from './data/data.json';
import TabView from './TabView';
import './styles/PlanetPage.scss';
import './styles/styles.scss';

import planetImage from './assets/planet-mercury.svg';

class PlanetPage extends React.Component {
  render() {
    const planetName = this.props.planetName;
    const planetInfo = planetsData.find((planet) => planet.name === planetName);

    if (!planetInfo) {
      return <div>Planet not found!</div>;
    }

    return (
      <div className='grid-container'>
        <div className="image-section">
          <img src={planetImage} alt={planetInfo.name} />
        </div>
        <div className="info-section">
          <h1>{planetInfo.name}</h1>
          <TabView planetInfo={planetInfo} />
        </div>
      </div>
    );
  }
}

export default PlanetPage;
