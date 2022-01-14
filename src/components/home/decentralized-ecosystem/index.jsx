import React from "react";

import "./index.scss";

import logo from "assets/images/logo_1.png";

const DecentralizedEcosystem = (props) => {
  return (
    <section className="decentralized-ecosystem">
      <div className="container">
        <div className="row content">
          <div className="col-xl-7 col-lg-6 col-md-6 col-12 logo">
            <img src={logo} alt={""} />
            <div>Decentralized Ecosystem</div>
          </div>
          <div className="col-lg col-md-6 col-12 text-center">
            <button className="btn btn-danger me-3">Pitch Deck</button>
            <button className="btn btn-outline-danger">Docs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedEcosystem;
