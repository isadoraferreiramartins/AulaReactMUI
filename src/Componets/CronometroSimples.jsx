import React from "react";
// Importamos apenas o básico para não dar erro de "not defined"
import { Box, Typography, Button, Paper, Container } from "@mui/material";

function CronometroSimples() {
  // 1. O useState (A Memória)
  // Criamos uma caixa chamada 'segundos' que começa em 0
  const [segundos, setSegundos] = React.useState(0);

  // 2. O useEffect (O Vigia / Ação Automática)
  React.useEffect(function () {
    // Esta função será executada assim que o componente aparecer na tela
    const intervalo = setInterval(function () {
      // Atualizamos o estado somando 1 ao valor anterior
      setSegundos(function (valorAnterior) {
        return valorAnterior + 1;
      });
    }, 1000); // 1000 milissegundos = 1 segundo

    // Importante: limpamos o cronômetro se sairmos da página
    return function () {
      clearInterval(intervalo);
    };
  }, []); // [] vazio significa: "Faça isso apenas uma vez ao carregar"

  // 3. Função convencional para zerar o tempo
  function resetarTempo() {
    setSegundos(0);
  }

  return (
    
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{ p: 4, textAlign: "center", bgcolor: "#f0f4f8" }}
      >
        <Typography variant="h6" gutterBottom>
          Tempo de Sessão
        </Typography>

        <Box sx={{ my: 3 }}>
          <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
            {segundos}s
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          O useEffect está contando os segundos automaticamente.
        </Typography>

        <Button variant="contained" onClick={resetarTempo}>
          Zerar Cronômetro
        </Button>
      </Paper>
    </Container>

  );
}

export default CronometroSimples;
