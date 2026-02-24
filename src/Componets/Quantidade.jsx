// Importamos apenas o que vamos usar
import { Button, Typography, Container, Stack } from '@mui/material';


function Quantidade() {
  const estoqueDisponivel = 0;


  function definirMensagem(quantidade) {
    let texto = "";
    if (quantidade > 0) {
      texto = "Produto em estoque";
    } else {
      texto = "Produto esgotado";
    }
    return texto;
  }

  function definirCorBotao(quantidade) {
    let cor = "";
    if (quantidade > 0) {
      cor = "primary";
    } else {
      cor = "error";
    }
    return cor;
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Meu Primeiro App com MUI
        
      </Typography>

      <Stack spacing={2} direction="column">
        <Typography variant="body1">
          Status atual: {definirMensagem(estoqueDisponivel)}
        </Typography>

        <Button 
          variant="contained" 
          color={definirCorBotao(estoqueDisponivel)}
        >
          Solicitar Reposição
        </Button>
      </Stack>
    </Container>
  );
}

export default Quantidade;