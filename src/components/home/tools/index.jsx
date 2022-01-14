import React from "react";

import "./index.scss";

import tools1 from "assets/images/tools/1.png";
import tools2 from "assets/images/tools/2.png";
import tools3 from "assets/images/tools/3.png";
import tools4 from "assets/images/tools/4.png";

const Tools = (props) => {
  return (
    <section className="tools row justify-content-center">
      <div className="col-xl-6 col-lg-7 col-md-8 col-12">
        <h4>The most delicious tools</h4>
        <h5>
          Everything you will ever need to start your cryptocurrency project and
          trade tokens on decentralized exchanges. A one-stop-shop.{" "}
        </h5>
        <div className="row tools__items">
          <div className="col-md-6 col-12 tools__items__item">
            <div>
              <img src={tools1} alt={""} />
              <h5>SandwichLaunch</h5>
              <p>
                Open, decentralized token minting; launching and locking
                platform. Easily mint, launch and lock or participate in private
                and public sales.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 tools__items__item">
            <div>
              <img src={tools2} alt={""} />
              <h5>SandwichSAFU (Coming Soon)</h5>
              <p>
                Decentralized launchpad with heavy security features for a safe
                place to participate in seed, private and public rounds of
                top-tier projects.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 tools__items__item">
            <div>
              <img src={tools3} alt={""} />
              <h5>SandwichTools (Coming Soon)</h5>
              <p>
                The most extensive toolbox for DEX trading. Analyse and
                anticipate market movements, statistics and connect personal
                wallets to track all investments in one place.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 tools__items__item">
            <div>
              <img src={tools4} alt={""} />
              <h5>SandwichSwap (Coming Soon)</h5>
              <p>
                Bringing together the ecosystem with one easy to use interface
                to get access to all market-leading decentralized exchanges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
