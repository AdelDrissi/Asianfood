import React from 'react';
import CuisineJapo2 from '../images/CuisineJapo2.jpg';

function InfoCuisine() {
  return (
    <div className="container-info">
      <img src={CuisineJapo2} alt="Background" className="image-info" />
      <div className="background-info">
        <h2>Bienvenue dans l'univers de la cuisine japonaise</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          accusamus reprehenderit recusandae dolorem commodi suscipit vitae
          illum repellat, optio odit molestias esse, quos quia officiis quam
          dolorum, corrupti illo non! Consequuntur adipisci, veritatis quas ab
          hic voluptatibus? Et eligendi laudantium ut quasi necessitatibus nihil
          excepturi eius quo asperiores suscipit laboriosam, accusantium nulla
          temporibus in. Voluptatum numquam animi quod at rem.
        </p>
      </div>
    </div>
  );
}

export default InfoCuisine;