import React from "react";

import "./index.scss";

import binance from "assets/images/partners/binance.png";
import polygon from "assets/images/partners/polygon.png";
import ethereum from "assets/images/partners/ethereum.png";
import solana from "assets/images/partners/solana.png";
import avalanche from "assets/images/partners/avalanche.png";

const Home = (props) => {
  return (
    <section className="top-section">
      <div className="container h-100">
        <div className="row flex-column justify-content-between h-100">
          <div></div>
          <div className="col-xl-5 col-lg-6 col-md-8 col content">
            <h1>
              Astronauts are eating <span>Sandwiches.</span>
            </h1>
            <div className="sub-content">
              Sandwich Network is the definite hub to start your decentralized
              cryptocurrency journey. A one-stop-shop with all tools you will
              ever need to trade. User-friendly and permissionless access to
              anyone.
            </div>
            <div>
              <button className="btn btn-danger">Launch App</button>
              <button className="btn btn-outline-danger">Pitch Deck</button>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-12">
            <div className="row partners">
              <div className="col-md col-4 partners__item">
                <div className="partners__item__img">
                  <img src={binance} alt="" />
                </div>
                <div className="partners__item__text"></div>
              </div>
              <div className="col-md col-4 partners__item">
                <div className="partners__item__img">
                  <img src={polygon} alt="" />
                </div>
                <div className="partners__item__text">Coming soon</div>
              </div>
              <div className="col-md col-4 partners__item">
                <div className="partners__item__img">
                  <img src={ethereum} alt="" />
                </div>
                <div className="partners__item__text">Coming soon</div>
              </div>
              <div className="col-md col-4 partners__item">
                <div className="partners__item__img">
                  <img src={solana} alt="" />
                </div>
                <div className="partners__item__text">Coming soon</div>
              </div>
              <div className="col-md col-4 partners__item">
                <div className="partners__item__img">
                  <img src={avalanche} alt="" />
                </div>
                <div className="partners__item__text">Coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
