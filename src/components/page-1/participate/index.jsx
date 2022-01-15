import React from "react";

import "./index.scss";

import join_bg from "assets/images/banner-1.png";
import binance from "assets/images/partners/binance.png";
import polygon from "assets/images/partners/polygon.png";
import ethereum from "assets/images/partners/ethereum.png";
import solana from "assets/images/partners/solana.png";
import avalanche from "assets/images/partners/avalanche.png";

const Participate = (props) => {
  return (
    <section className="participate">
      <div className="container">
        <div className="row content">
          <div className="col-xl-4 col-lg-5 col-md-7 col-12 text">
            <h4>SandwichSAFU</h4>
            <h5>
              Participate in seed, private & public rounds for top-tier
              projects.
            </h5>
            <div className="socials">
              <button className="btn btn-light">Get Started</button>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-5 col-12 logo">
            <img src={join_bg} alt={""} />
          </div>
        </div>
        <div className="row partners">
          <div className="col-md col-6 partners__item">
            <div className="partners__item__img">
              <img src={binance} alt="" />
            </div>
            <div className="partners__item__text"></div>
          </div>
          <div className="col-md col-6 partners__item">
            <div className="partners__item__img">
              <img src={polygon} alt="" />
            </div>
            <div className="partners__item__text">Coming soon</div>
          </div>
          <div className="col-md col-6 partners__item">
            <div className="partners__item__img">
              <img src={ethereum} alt="" />
            </div>
            <div className="partners__item__text">Coming soon</div>
          </div>
          <div className="col-md col-6 partners__item">
            <div className="partners__item__img">
              <img src={solana} alt="" />
            </div>
            <div className="partners__item__text">Coming soon</div>
          </div>
          <div className="col-md col-6 partners__item">
            <div className="partners__item__img">
              <img src={avalanche} alt="" />
            </div>
            <div className="partners__item__text">Coming soon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participate;
