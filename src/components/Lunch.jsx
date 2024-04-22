import React from 'react';
import lunchbox from '../images/lunchbox.jpg';

function Lunch() {
  return (
    <section className="lunch-container">
      <div className="lunch-japanese">
        <div className="image-container">
          <img src={lunchbox} alt="Background" className="lunch-box" />
          <div className="text-overlay">
            <h1 className='lunch-title'> Lunch Box ! </h1>
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
