import React from 'react';
import './AboutPage.css'; // You can create this CSS file to style the component

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="title">Acerca de Nosotros</h1>
      <p className="subtitle">Seriedad en el Sabor</p>
      <p className="text">
        En Pink Buda Burgers, no tomamos las hamburguesas a la ligera. Desde nuestro humilde comienzo en 2023 en el corazón de Barcelona, nos hemos dedicado a crear las hamburguesas más deliciosas y satisfactorias que puedas encontrar. Nuestro eslogan lo dice todo: <strong>"We Are Serious About Smash"</strong>.
      </p>
      {/* Add more content here */}
    </div>
  );
};

export default AboutPage;
