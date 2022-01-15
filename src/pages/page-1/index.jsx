import React, { Suspense } from "react";

import "./index.scss";

const Header = React.lazy(() => import("components/common/layouts/header"));
const LeftMenu = React.lazy(() => import("components/page-1/left-menu"));
const Participate = React.lazy(() => import("components/page-1/participate"));
const Live = React.lazy(() => import("components/page-1/live"));
const Sales = React.lazy(() => import("components/page-1/sales"));
const Support = React.lazy(() => import("components/page-1/support"));

const Page1 = (props) => {
  return (
    <Suspense fallback={""}>
      <section className="page1-section">
        <Header />
        <div className="row">
          <div className="col-xxl-2 col-xs-3 col-lg-3 col-md-4 col-12 p-0">
            <LeftMenu />
          </div>
          <div className="col-xxl-10 col-xs-9 col-lg-9 col-md-8 col-12 p-0">
            <Participate />
            <Live />
            <Sales />
            <Support />
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Page1;
