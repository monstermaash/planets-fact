import React, { Component } from 'react';
import './styles/TabView.scss';
import './styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

class TabView extends Component {
  render() {
    const { activeTab, planetInfo, onTabChange } = this.props;

    const overviewContent = planetInfo && planetInfo.overview ? planetInfo.overview.content : '';
    const overviewSource = planetInfo && planetInfo.overview ? planetInfo.overview.source : '';
    const structureContent = planetInfo && planetInfo.structure ? planetInfo.structure.content : '';
    const structureSource = planetInfo && planetInfo.structure ? planetInfo.structure.source : '';
    const geologyContent = planetInfo && planetInfo.geology ? planetInfo.geology.content : '';
    const geologySource = planetInfo && planetInfo.geology ? planetInfo.geology.source : '';

    return (
      <div className="tab-view">
        <div className="tab-content">
          {activeTab === 'overview' && (
            <>
              <p>{overviewContent}</p>
              <div className="source">
                <span>Source: </span>
                <a href={overviewSource} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </>
          )}
          {activeTab === 'structure' && (
            <>
              <p>{structureContent}</p>
              <div className="source">
                <span>Source: </span>
                <a href={structureSource} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </>
          )}
          {activeTab === 'geology' && (
            <>
              <p>{geologyContent}</p>
              <div className="source">
                <span>Source: </span>
                <a href={geologySource} target="_blank" rel="noopener noreferrer">
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
            onClick={() => onTabChange('overview', planetInfo && planetInfo.images.planet)}
          >
            <p>01</p>
            Overview
          </button>
          <button
            className={activeTab === 'structure' ? 'active' : ''}
            onClick={() => onTabChange('structure', planetInfo && planetInfo.images.internal)}
          >
            <p>02</p>
            Internal Structure
          </button>
          <button
            className={activeTab === 'geology' ? 'active' : ''}
            onClick={() => onTabChange('geology', planetInfo && planetInfo.images.geology)}
          >
            <p>03</p>
            Surface Geology
          </button>
        </div>
      </div>
    );
  }
}

export default TabView;
