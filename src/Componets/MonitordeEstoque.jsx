import React from "react";
import { Button, Typography, Box } from "@mui/material";

function MonitordeEstoque() {
  const [quantidade, setQuantidade] = React.useState(10);

  // O VIGIA (useEffect)
  React.useEffect(
    function () {
      if (quantidade === 0) {
        alert("Atenção: O estoque acabou!");
      }
    },
    [quantidade],
  ); // O vigia só olha para a variável 'quantidade'

  function vender() {
    setQuantidade(quantidade - 1);
  }

  return (
    <Box textAlign={"center"} sx={{ mt: 2 }}>
      <Typography>Total: {quantidade}</Typography>
      <Button variant="contained" color="secondary" onClick={vender}>
        Vender 1 Unidade
      </Button>
    </Box>
  );
}
export default MonitordeEstoque;
