import React from "react";
import { createRoot } from "react-dom/client";
import UsersPage from "./UsersPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<UsersPage />);
