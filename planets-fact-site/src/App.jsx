import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import PlanetPage from './PlanetPage';
import Footer from './Footer';
import '@/styles/styles.scss';

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury');

  const handlePlanetChange = (planetName) => {
    setSelectedPlanet(planetName);
  };

  return (
    <div>
      <Navbar onSelectPlanet={handlePlanetChange} selectedPlanet={selectedPlanet} />
      <div className="container">
        <PlanetPage planetName={selectedPlanet} />
        <Footer planetName={selectedPlanet} />
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
