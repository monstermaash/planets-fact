import React from 'react';
import './styles/TabView.scss';
import './styles/styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


class TabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'overview' // Default active tab is 'overview'
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    const { overview, structure, geology } = this.props.planetInfo;

    return (
      <div className="tab-view">
        <div className="tab-content">
          {activeTab === 'overview' && (
            <>
              <p>{overview.content}</p>
              <div className="source">
                <span>Source: </span>
                <a href={overview.source} target="_blank" rel="noopener noreferrer">Wikipedia<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </div>
            </>
          )}
          {activeTab === 'structure' && (
            <>
              <p>{structure.content}</p>
              <div className="source">
                <span>Source: </span>
                <a href={structure.source} target="_blank" rel="noopener noreferrer">Wikipedia<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </div>
            </>
          )}
          {activeTab === 'geology' && (
            <>
              <p>{geology.content}</p>
              <div className="source">
                <span>Source: </span>
                <a href={geology.source} target="_blank" rel="noopener noreferrer">Wikipedia<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </div>
            </>
          )}
        </div>
        <div className="tab-buttons">
          <button
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => this.handleTabChange('overview')}
          >
            <p>01</p>
            Overview
          </button>
          <button
            className={activeTab === 'structure' ? 'active' : ''}
            onClick={() => this.handleTabChange('structure')}
          >
            <p>02</p>
            Internal Structure
          </button>
          <button
            className={activeTab === 'geology' ? 'active' : ''}
            onClick={() => this.handleTabChange('geology')}
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
