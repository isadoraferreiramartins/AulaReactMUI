import React from "react";
import Swal from "sweetalert2";


function SweetAlert() {
  Swal.fire({
    title: "Você tem certeza?",
    text: "Isso não pode ser revertido!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, entrar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Bem-Vindo!", "Você acabou de entrar no arquivo das Super Poderosas 🩷💚💙", "success");
    }
  });
}

export default SweetAlert;
