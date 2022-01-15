import React from "react";

import "./index.scss";

import join_bg from "assets/images/banner-2.svg";
import bg1 from "assets/images/live-bg-1.png";
import bg2 from "assets/images/live-bg-2.png";
import bg3 from "assets/images/live-bg-3.png";
import bg4 from "assets/images/live-bg-4.png";

import item1 from "assets/images/live-items/1.png";
import item2 from "assets/images/live-items/2.png";
import item3 from "assets/images/live-items/3.png";

import social1 from "assets/images/live-items/social1.svg";
import social2 from "assets/images/live-items/social2.svg";
import social3 from "assets/images/live-items/social3.svg";

const Live = (props) => {
  return (
    <section className="live-section">
      <div className="container">
        <h3>Live and upcoming sales</h3>
        <div className="row content">
          <div>
            <img className="live-bg bg1" src={bg1} alt="" />
            <img className="live-bg bg2" src={bg2} alt="" />
            <img className="live-bg bg3" src={bg3} alt="" />
            <img className="live-bg bg4" src={bg4} alt="" />
          </div>

          <div className="col-xl-4 col-lg-5 col-md-7 col-12 text">
            <h4>SandwichSAFU</h4>
            <h5>SHO Total Raise</h5>
            <h3>$95,000</h3>
            <h5>Allocation per winning ticket</h5>
            <h3>
              200 BUSD <span>(275 Allocations)</span>
            </h3>
            <div className="socials">
              <button className="btn btn-light">Get Started</button>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-5 col-12 logo">
            <img src={join_bg} alt={""} />
          </div>
        </div>

        <div className="row live-items">
          <div className="col-lg-4 col-md-6 col-12 live-items__item">
            <div className="item item1">
              <san className="label">SHO</san>
              <div className="img">
                <img src={item1} alt={""} />
              </div>
              <div className="title">
                <div>CodyFight</div>
                <span>coming soon</span>
              </div>
              <div className="socials">
                <span className="socials__item item1">
                  <img src={social1} alt={""} />
                </span>
                <span className="socials__item item2">
                  <img src={social2} alt={""} />
                </span>
                <span className="socials__item item3">
                  <img src={social3} alt={""} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 live-items__item">
            <div className="item item2">
              <san className="label">SHO</san>
              <div className="img">
                <img src={item2} alt={""} />
              </div>
              <div className="title">
                <div>CodyFight</div>
                <span>coming soon</span>
              </div>
              <div className="socials">
                <span className="socials__item item1">
                  <img src={social1} alt={""} />
                </span>
                <span className="socials__item item2">
                  <img src={social2} alt={""} />
                </span>
                <span className="socials__item item3">
                  <img src={social3} alt={""} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 live-items__item">
            <div className="item item3">
              <san className="label">SHO</san>
              <div className="img">
                <img src={item3} alt={""} />
              </div>
              <div className="title">
                <div>CodyFight</div>
                <span>coming soon</span>
              </div>
              <div className="socials">
                <span className="socials__item item1">
                  <img src={social1} alt={""} />
                </span>
                <span className="socials__item item2">
                  <img src={social2} alt={""} />
                </span>
                <span className="socials__item item3">
                  <img src={social3} alt={""} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;
