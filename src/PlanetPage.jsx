import React from 'react';
import planetsData from './data/data.json';
import TabView from './TabView';
import './styles/PlanetPage.scss';
import './styles/styles.scss';

class PlanetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'overview', 
      planetInfo: null,
      planetImage: null
    };
  }

  componentDidMount() {
    this.loadPlanetInfo(this.props.planetName);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.planetName !== this.props.planetName) {
      this.loadPlanetInfo(this.props.planetName);
    }
  }

  loadPlanetInfo = (planetName) => {
    const planetInfo = planetsData.find((planet) => planet.name === planetName);
    if (planetInfo) {
      const planetImage = planetInfo.images.planet;
      this.setState({ planetInfo, planetImage, activeTab: 'overview' });
    } else {
      this.setState({ planetInfo: null, planetImage: null });
    }
  };

  handleTabChange = (tab, imageUrl) => {
    this.setState({ activeTab: tab, planetImage: imageUrl });
  };

  render() {
    const { planetInfo, planetImage, activeTab } = this.state;

    if (!planetInfo) {
      return <div>Planet not found!</div>;
    }

    return (
      <div className="grid-container">
        <div className="image-section">
          <img src={planetImage} alt={planetInfo.name} />
        </div>
        <div className="info-section">
          <h1>{planetInfo.name}</h1>
          <TabView
            planetInfo={planetInfo}
            activeTab={activeTab}
            onTabChange={this.handleTabChange}
          />
        </div>
      </div>
    );
  }
}

export default PlanetPage;
