import React from "react";

import "./index.scss";

import sandwich_network from "assets/images/how-to-buy/sandwich-network.svg";
import pancake_swap from "assets/images/how-to-buy/pancake-swap.svg";

const HowToBuy = (props) => {
  return (
    <section className="how-to-buy-section">
      <div className="container">
        <div className="how-to-buy">
          <div className="row content">
            <div className="col-xl-7 col-lg-8 col-md-9 col-12">
              <h4>How to buy $SANDWICH?</h4>
              <div className="row">
                <div className="col-md-6 col-6 item">
                  <span>
                    <img src={sandwich_network} alt={""} />
                  </span>
                  <div>Sandwich Network</div>
                </div>
                <div className="col-md-6 col-6 item">
                  <span>
                    <img src={pancake_swap} alt={""} />
                  </span>
                  <div>PancakeSwap</div>
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-lg-4 col-md-3 col-12 text-lg-end">
              <button className="btn btn-danger">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
