import { Container, FormGroup, FormControlLabel, Checkbox, Switch, Typography } from '@mui/material';

function FormPreferencias() {
  function exibirAvisoSeguranca(ligado) {
    let mensagem = "";
    if (ligado === true) {
      mensagem = "A autenticação em duas etapas está ativa.";
    } else {
      mensagem = "Seu sistema está vulnerável.";
    }
    return mensagem;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h6">Configurações de Conta</Typography>
      
      <FormGroup>
        <FormControlLabel 
          control={<Checkbox defaultChecked />} 
          label="Receber notificações por e-mail" 
        />
        
        <FormControlLabel 
          control={<Switch />} 
          label="Modo Noturno" 
        />
      </FormGroup>

      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        {exibirAvisoSeguranca(false)}
      </Typography>
    </Container>
  );
}
export default FormPreferencias;