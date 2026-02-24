import React from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function FormConfiguracoes() {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Exemplo de Select (Menu suspenso) */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Departamento</InputLabel>
        <Select label="Departamento" value="">
          <MenuItem value={10}>Financeiro</MenuItem>
          <MenuItem value={20}>Vendas</MenuItem>
          <MenuItem value={30}>Estoque</MenuItem>
        </Select>
      </FormControl>

      {/* Exemplo de Radio Buttons (Escolha única) */}
      <FormControl>
        <FormLabel>Turno de Trabalho</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="m" control={<Radio />} label="Manhã" />
          <FormControlLabel value="t" control={<Radio />} label="Tarde" />
          <FormControlLabel value="n" control={<Radio />} label="Noite" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default FormConfiguracoes;
