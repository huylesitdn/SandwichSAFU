import React from "react";

import "./index.scss";

import head from "assets/images/tokens/head.svg";
import discount from "assets/images/tokens/discount.svg";
import key from "assets/images/tokens/key.svg";
import access from "assets/images/tokens/access.svg";
import staking from "assets/images/tokens/staking.svg";
import benefit from "assets/images/tokens/benefit.svg";

const Token = (props) => {
  return (
    <section className="tokens">
      <div className="container">
        <h4>$SANDWICH Token</h4>
        <div className="row tokens__items">
          <div className="col-lg-4 col-6 tokens__items__item">
            <div>
              <span>
                <img src={head} alt={""} />
              </span>
              <p>
                Participate in seed, private and public rounds of top-tier
                projects on SandwichSAFU.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-6 tokens__items__item">
            <div className="active">
              <span>
                <img src={discount} alt={""} />
              </span>
              <p>Discounts on all tools and applications.</p>
            </div>
          </div>
          <div className="col-lg-4 col-6 tokens__items__item">
            <div>
              <span>
                <img src={key} alt={""} />
              </span>
              <p>Key governance votes for new updates & functionality.</p>
            </div>
          </div>
          <div className="col-lg-4 col-6 tokens__items__item">
            <div>
              <span>
                <img src={access} alt={""} />
              </span>
              <p>
                Access to premium tools & applications such as wallet tracking.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-6 tokens__items__item">
            <div>
              <span>
                <img src={staking} alt={""} />
              </span>
              <p>Staking & farming through SandwichSwap.</p>
            </div>
          </div>
          <div className="col-lg-4 col-6 tokens__items__item">
            <div>
              <span>
                <img src={benefit} alt={""} />
              </span>
              <p>
                Benefit from more token utility with each new update and app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
