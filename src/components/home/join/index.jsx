import React from "react";

import "./index.scss";

import join_bg from "assets/images/join-bg.svg";
import telegrams from "assets/icons/telegrams.svg";
import medium from "assets/icons/medium.svg";
import twitter from "assets/icons/twitter.svg";

const Join = (props) => {
  return (
    <section className="join">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6 col-md-7 col-12 text">
            <h4>Join the Community</h4>
            <h5>Join the fastest growing decentralized ecosystem in the world of crypto.</h5>
            <div className="socials">
              <button className="btn btn-light">Join Us On Telegram <img src={telegrams} alt="" /></button>
            </div>
            <div className="socials two">
              <button className="btn btn-outline-secondary"><img src={medium} alt="" /> Our Medium</button>
              <button className="btn btn-outline-secondary"><img src={twitter} alt="" /> Our Twitter</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-12 logo">
            <img src={join_bg} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
