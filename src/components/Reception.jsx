import React from 'react';
import recep from '../images/recep.jpg';

function Reception() {
  return (
    <section className="lunch-reserve">
      <div className="lunch-japanese-reception">
        <div className="image-reception">
          <img src={recep} alt="Background" className="reception-box" />
          <div className="text-overlay-reception">
            <h1 className="lunch-title-reception"> Pour les réceptions </h1>
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

export default Reception;
