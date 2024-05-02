import React from 'react';
import Végétal from '../images/Végétal.jpg';

function Lunch() {
  return (
    <section className="végés-container">
      <div className="végés-japanese">
        <div className="image-container-végés">
          <img src={Végétal} alt="Background" className="lunch-box" />
          <div className="végés-overlay">
            <h1 className="lunch-title"> Menus Végés! </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              reprehenderit ex aperiam officiis suscipit aliquam iusto, quam
              eligendi excepturi sit!
            </p>
            <a href="#" className="btn-lunch">
              Réserver
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lunch;
