import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "../components/Layout";
import { DiscountDetail } from "../components/Discount";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <DiscountDetail />
    </Layout>
  </React.StrictMode>
);
