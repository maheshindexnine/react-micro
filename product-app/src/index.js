import React from "react";
import { createRoot } from "react-dom/client";
import ProductsPage from "./ProductPage";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ProductsPage />);
