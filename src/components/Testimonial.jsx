import React from 'react';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h1 className="heading client-heading">What People Say</h1>
      <div className="client-container">
        <div className="bg-1"></div>
        <div className="bg-2">
          <div className="img"></div>
          <p className="client-des">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, consequatur repellat! Maxime numquam, commodi cupiditate eum impedit
            nam doloremque nisi.
          </p>
          <h2>Kate Anderson</h2>
          <p className="client-status">regular Client</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
