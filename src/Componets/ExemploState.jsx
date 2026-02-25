import React from "react";

function ExemploState() {
  const [numero, setNumero] = React.useState(0);
  function aumentar() {
    setNumero(numero + 1);
  }
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Contagem: {numero}</h1>
      <button
        onClick={aumentar}
        style={{
          backgroundColor: "withe",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        Aumentar Numero
      </button>
    </div>
  );
}

export default ExemploState;
