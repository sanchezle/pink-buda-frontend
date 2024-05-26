import React from 'react';
import './AboutPage.css'; // Import the CSS file to style the component

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="content">
        <h1 className="title">Acerca de Nosotros</h1>
        <p className="subtitle">Seriedad en el Sabor</p>
        <p className="text">
          En Pink Buda Burgers, no tomamos las hamburguesas a la ligera. Desde nuestro humilde comienzo en 2023 en el corazón de Barcelona, nos hemos dedicado a crear las hamburguesas más deliciosas y satisfactorias que puedas encontrar. Nuestro eslogan lo dice todo: <strong>"We Are Serious About Smash"</strong>.
        </p>
        <p className="text">
          <strong>Nuestra Historia</strong><br />
          Fundada por un grupo de amigos apasionados por la comida y la buena compañía, Pink Buda Burgers nació con la visión de ofrecer algo más que una simple hamburguesa. Queríamos crear una experiencia culinaria que dejara una impresión duradera en nuestros clientes. Así que nos pusimos manos a la obra, experimentando con ingredientes frescos y sabores audaces.
        </p>

      </div>
    </div>
  );
};

export default AboutPage;

