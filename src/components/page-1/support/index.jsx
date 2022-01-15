import React from "react";

import "./index.scss";

import join_bg from "assets/images/support-bg.png";
import bg1 from "assets/images/live-bg-1.png";
import bg2 from "assets/images/live-bg-2.png";
import bg3 from "assets/images/live-bg-3.png";
import bg4 from "assets/images/live-bg-4.png";

const Support = (props) => {
  return (
    <section className="support-section">
      <div className="container">
        <div>
          <img className="live-bg bg1" src={bg1} alt="" />
          <img className="live-bg bg2" src={bg2} alt="" />
          <img className="live-bg bg3" src={bg3} alt="" />
          <img className="live-bg bg4" src={bg4} alt="" />
        </div>
        <div className="row content">
          <div className="col-xl-5 col-lg-6 col-md-7 col-12 text">
            <h4>Supported by industry-leading Venture Capital Parties, Influencers & Exchanges. </h4>
            <h5>Ideas that launch on SandwichSAFU are not only highly-vetted by our team of expert analysts, but also by industry-leading Companies and Persons. </h5>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-5 col-12 logo">
            <img src={join_bg} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
