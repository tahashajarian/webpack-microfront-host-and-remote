import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";

const App = () => <Main />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
