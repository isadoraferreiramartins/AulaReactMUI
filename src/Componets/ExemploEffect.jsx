import React from "react";

function ExemploEffect() {
  const [status, setStatus] = React.useState("Carregando...");

  //O useEffect executa automaticamente
  React.useEffect(function () {
    //Simulando que apos 5 segundos algo acontece
    setTimeout(function () {
      setStatus("Sistema Pronto!");
    }, 5000);
  }, []); // O [] garante que só rode uma vez
  return (
    <div
         style={{
      textAlign: "center",
      backgroundColor: "#f4f6f8",
      padding: "40px",
      borderRadius: "10px",
      width: "400px",
      margin: "50px auto",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}
    >
      <h1>Status do Sistema: {status}</h1>
      <p>O vigia (useEffect) mudou o texto sozinho após 5 segundos</p>
    </div>
  );
}

export default ExemploEffect;
