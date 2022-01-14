import HomePage from "pages/home";
import PreMintPage from "pages/pre-mint";

import Layout from "components/common/layouts"

export const routes = [
  {
    path: "/pre-mint",
    component: PreMintPage,
    layout: Layout,
    exact: true,
  },
  {
    path: "/",
    component: HomePage,
    layout: Layout,
    exact: true,
  },
];
