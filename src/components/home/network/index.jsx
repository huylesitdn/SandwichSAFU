import React from "react";

import "./index.scss";

const Network = (props) => {
  return (
    <section className="network row justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-12 content">
        <h4>Why Sandwich Network?</h4>
        <h5>
          Everything you will ever need to start your cryptocurrency project and
          trade tokens on decentralized exchanges. A one-stop-shop.
        </h5>
        <div className="row network__items">
          <div className="col-6 network__items__item ">
            <div className="left">
              <h5>Problem</h5>
              <p>
                The current market for investing, launching and tracking crypto
                currency projects is highly fragmented at this time. For
                everything you need different tools which can be frustrating but
                also can lead to mistakes like losing funds or keeping track of
                investments and holdings.
              </p>
            </div>
          </div>
          <div className="col-6 network__items__item ">
            <div className="right">
              <h5>Solution</h5>
              <p>
                This is where Sandwich Network joins the game. Providing a
                simple ecosystem with all tools and applications you will ever
                need to trade DEX tokens or start your own cryptocurrency
                project. Permissionless and completely decentralized.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-line"></div>
    </section>
  );
};

export default Network;
