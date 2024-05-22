import React from 'react';
import Dessert from '../images/Dessert.jpg';

function Desserts() {
  return (
    <section className="dessert-reserve" id="Desserts">
      <div className="lunch-japanese-reception">
        <div className="image-desserts">
          <img src={Dessert} alt="Background" className="reception-box" />
          <div className="text-overlay-desserts">
            <h1 className="lunch-title-reception"> Desserts </h1>
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

export default Desserts;
