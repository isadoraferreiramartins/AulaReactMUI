import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FormCadastro from "./Componets/FormCadastro";
import Quantidade from "./Componets/Quantidade";
import FormPreferencias from "./Componets/FormPreferencias";
import FormConfiguracoes from "./Componets/FormConfiguracoes";
import CadastrodeProdutos from "./Componets/CadastrodeProdutos";
import ExemploState from "./Componets/ExemploState";
import ExemploEffect from "./Componets/ExemploEffect";
import ContadorEstoque from "./Componets/ContadorEstoque";
import MonitordeEstoque from "./Componets/MonitordeEstoque";
import CronometroSimples from "./Componets/CronometroSimples";
import SweetAlert from "./Componets/SweetAlert";

import CadastroCliente from "./Componets/CadastroCliente";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Quantidade />
    <FormCadastro />
    <FormConfiguracoes />
    <FormPreferencias />
    <CadastrodeProdutos />
    <ExemploState />
    <ExemploEffect />
    <ContadorEstoque />
    <MonitordeEstoque />
    <CronometroSimples />
    <SweetAlert />
    <CadastroCliente />
  </StrictMode>,
);
