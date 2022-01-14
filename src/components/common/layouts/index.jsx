import React, { Suspense } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <Suspense fallback={''}>
      <Header/>
      <main>{props.children}</main>
      <Footer/>
    </Suspense>
  );
};

export default Layout;
