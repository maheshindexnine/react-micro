import React from "react";
import { createRoot } from "react-dom/client";
import UsersPage from "./UsersPage";
import UserDetailPage from "./UserDetailPage";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<UserDetailPage />);
