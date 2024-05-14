import React, { Component } from 'react';
import anime from 'animejs';
import './styles/TabView.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


class TabView extends Component {
  constructor(props) {
    super(props);
    this.tabContentRef = React.createRef();
  }

  componentDidMount() {
    this.animateTabContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.planetInfo !== this.props.planetInfo) {
      this.animateTabContent();
    }
  }

  animateTabContent = () => {
    const tabContentElement = this.tabContentRef.current;
    if (tabContentElement) {
      anime({
        targets: tabContentElement.children,
        translateY: ['-1em', 0],
        opacity: [0, 1],
        duration: 1000,
        delay: (el, i) => 250 * i,
        easing: 'easeOutExpo'
      });
    }
  };

  render() {
    const { activeTab, planetInfo, onTabChange } = this.props;

    if (!planetInfo) {
      return null;
    }

    const { overview, structure, geology } = planetInfo;

    const planetColors = {
      Mercury: '#b1d5e2',
      Venus: '#f7cc7f',
      Earth: '#545bfe',
      Mars: '#ff6a45',
      Jupiter: '#ecad7a',
      Saturn: '#fccb6b',
      Uranus: '#65f0d5',
      Neptune: '#497efa'
    };

    const getButtonStyle = (tabName) => {
    const isActive = activeTab === tabName;
    const planetColor = planetColors[planetInfo.name] || '#FFFFFF';
    const activePlanetColor = planetColors[tabName] || '#FFFFFF'; 

    document.documentElement.style.setProperty('--active-color', isActive ? activePlanetColor : planetColor);

    return {
        backgroundColor: isActive && window.innerWidth > 900 ? planetColor : 'transparent',
        color: '#FFFFFFBF'
      };
  };

    return (
      <div className="tab-view">
        <div className="tab-content" ref={this.tabContentRef}>
          {activeTab === 'overview' && (
            <>
              <p>{overview?.content}</p>
              <div className="source">
                <span>Source: </span>
                <a href={overview?.source} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </>
          )}
          {activeTab === 'structure' && (
            <>
              <p>{structure?.content}</p>
              <div className="source">
                <span>Source: </span>
                <a href={structure?.source} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </>
          )}
          {activeTab === 'geology' && (
            <>
              <p>{geology?.content}</p>
              <div className="source">
                <span>Source: </span>
                <a href={geology?.source} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </>
          )}
        </div>
        <div className="tab-buttons">
          <button
            className={activeTab === 'overview' ? 'active' : ''}
            style={getButtonStyle('overview')}
            onClick={() => onTabChange('overview', planetInfo.images.planet)}
          >
            <p>01</p>
            Overview
          </button>
          <button
            className={activeTab === 'structure' ? 'active' : ''}
            style={getButtonStyle('structure')}
            onClick={() => onTabChange('structure', planetInfo.images.internal)}
          >
            <p>02</p>
            <span>Internal</span> Structure
          </button>
          <button
            className={activeTab === 'geology' ? 'active' : ''}
            style={getButtonStyle('geology')}
            onClick={() => onTabChange('geology', planetInfo.images.geology)}
          >
            <p>03</p>
            Surface <span>Geology</span>
          </button>
        </div>
      </div>
    );
  }
}

export default TabView;
