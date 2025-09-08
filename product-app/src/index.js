import React from "react";
import { createRoot } from "react-dom/client";
import ProductsPage from "./ProductPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ProductsPage />);
