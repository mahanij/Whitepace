import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav/Nav";
import CenterPart from "./components/HeroCenterPart/CenterPart";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <CenterPart/>
  </StrictMode>
);
