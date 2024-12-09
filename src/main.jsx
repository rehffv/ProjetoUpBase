import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import './index.css';
import TelaInicialEmpty from "./Pages/TelaInicialEmptyPage/TelaInicialEmpty";
import Formulario from "./Pages/FormularioPage/Formulario";

import { BrowserRouter, Route, Routes } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<TelaInicialEmpty />} />
      <Route path="/Formulario" element={<Formulario />} />

    </Routes>
    
    </BrowserRouter>
  </StrictMode>
);
