import React from "react";

import "./index.scss";

import item1 from "assets/images/sales/1.png";
import item2 from "assets/images/sales/2.png";
import item3 from "assets/images/sales/3.png";
import item4 from "assets/images/sales/4.png";

const Sales = (props) => {
  return (
    <section className="sales-section">
      <div className="container">
        <h3>Complete Sales</h3>
        <div className="row content">
          <div className="col-12 content__item">
            <div className="d-flex align-items-center">
              <img className="img" src={item1} alt="" />
              <div>
                <div className="title">Vicotria VR</div>
                <div className="total">Total Raise</div>
                <div className="price">$150,000</div>
              </div>
            </div>
            <div>
              <div className="total">All Time Hight</div>
              <div className="price text-center">12X</div>
            </div>
            <div>
              <button className="btn btn-primary">Researh</button>
            </div>
          </div>
          <div className="col-12 content__item">
            <div className="d-flex align-items-center">
              <img className="img" src={item2} alt="" />
              <div>
                <div className="title">Vicotria VR</div>
                <div className="total">Total Raise</div>
                <div className="price">$150,000</div>
              </div>
            </div>
            <div>
              <div className="total">All Time Hight</div>
              <div className="price text-center">12X</div>
            </div>
            <div>
              <button className="btn btn-primary">Researh</button>
            </div>
          </div>
          <div className="col-12 content__item">
            <div className="d-flex align-items-center">
              <img className="img" src={item3} alt="" />
              <div>
                <div className="title">Vicotria VR</div>
                <div className="total">Total Raise</div>
                <div className="price">$150,000</div>
              </div>
            </div>
            <div>
              <div className="total">All Time Hight</div>
              <div className="price text-center">12X</div>
            </div>
            <div>
              <button className="btn btn-primary">Researh</button>
            </div>
          </div>
          <div className="col-12 content__item">
            <div className="d-flex align-items-center">
              <img className="img" src={item4} alt="" />
              <div>
                <div className="title">Vicotria VR</div>
                <div className="total">Total Raise</div>
                <div className="price">$150,000</div>
              </div>
            </div>
            <div>
              <div className="total">All Time Hight</div>
              <div className="price text-center">12X</div>
            </div>
            <div>
              <button className="btn btn-primary">Researh</button>
            </div>
          </div>
          <div className="col-12 content__item">
            <div className="d-flex align-items-center">
              <img className="img" src={item1} alt="" />
              <div>
                <div className="title">Vicotria VR</div>
                <div className="total">Total Raise</div>
                <div className="price">$150,000</div>
              </div>
            </div>
            <div>
              <div className="total">All Time Hight</div>
              <div className="price text-center">12X</div>
            </div>
            <div>
              <button className="btn btn-primary">Researh</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
