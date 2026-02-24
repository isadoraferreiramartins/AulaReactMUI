import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FormCadastro from "./Componets/FormCadastro";
import Quantidade from "./Componets/Quantidade";
import FormPreferencias from "./Componets/FormPreferencias";
import FormConfiguracoes from "./Componets/FormConfiguracoes";
import CadastrodeProdutos from "./Componets/CadastrodeProdutos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Quantidade />
    <FormCadastro />
    <FormConfiguracoes />
    <FormPreferencias />
    <CadastrodeProdutos />
    
  </StrictMode>,
);
