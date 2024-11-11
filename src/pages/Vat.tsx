import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "../components/Layout";
import { VATDetail } from "../components/Vat";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <VATDetail />
    </Layout>
  </React.StrictMode>
);
