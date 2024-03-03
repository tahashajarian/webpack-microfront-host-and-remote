import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routers/MainRoutes";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <Header title={"Host App"} />
    <MainRoutes />
    <Footer />
  </BrowserRouter>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
