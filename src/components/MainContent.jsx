import React from 'react';
import backSushi from '../images/backSushi.jpg';

function MainContent() {
  return (
    <div className="container">
      <img src={backSushi} alt="Background" className="image" />
      <div className="resto-name">
        <h1>Wazabi</h1>
        <h2>Traiteur - Cuisine - Inspiration - Japon</h2>
        <a href="#" className="btn-content">
          Réserver
        </a>
      </div>
    </div>
  );
}

export default MainContent;
