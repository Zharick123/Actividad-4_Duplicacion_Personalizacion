import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";

import "./styles/global.scss"; // Importamos los estilos globales que incluyen la temática tropical

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Envolvemos la aplicación en StrictMode para mantener buenas prácticas de desarrollo */}
    <div className="app-wrapper">
      {/* Aplicamos un contenedor general que sigue el tema */}
      <Home />
    </div>

    {/* Estilos globales adicionales si es necesario */}
    <style jsx global>{`
      .app-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #00c4cc, #0071c5); /* Fondo oceánico */
        padding: 20px;
      }
    `}</style>
  </StrictMode>
);
