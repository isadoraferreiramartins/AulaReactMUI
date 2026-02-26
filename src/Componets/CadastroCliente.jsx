import React from "react";
import {
  Container,
  Typography,
  TextField,
  Stack,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";
import Swal from "sweetalert2";

// Importações dos arquivos JSON internos
import { clientesDisponiveis } from "../Dados/datacliente";
import { clientesIniciais } from "/Dados/dadosClientes";


function CadastroCliente() {
  // 1. ESTADOS (Memória)
  const [nome, setNome] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  // Criamos uma lista na memória que começa com os dados do arquivo
  const [listaClientes, setListaClientes] = React.useState(clientesIniciais);

  // 2. FUNÇÕES DE MANIPULAÇÃO (Handlers)
  function mudarNome(event) {
    setNome(event.target.value);
  }

  function mudarCategoria(event) {
    setCategoria(event.target.value);
  }

  function adicionarCliente() {
    // Criamos um novo objeto com os dados digitados
    const novoCliente = {
      id: Math.random(), // Gera um ID temporário
      nome: nome,
      categoria: categoria,
    };

    // Adicionamos o novo cliente à lista existente
    // Usamos o padrão de "espalhar" os clientes antigos e somar o novo
    setListaClientes([...listaClientes, novoCliente]);
    Swal.fire({
  title: "Cadastrado com Sucesso!",
  icon: "success",
  draggable: true
});

    // Limpamos os campos após salvar
    setNome("");
    setCategoria("");
  }

  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "40px",
      }}
    >
      <Grid container spacing={4}>
        {/* COLUNA 1: FORMULÁRIO DE CADASTRO */}
        <Grid item xs={12} md={5}>
          <Paper
            style={{
              maxHeight: "400px",
              overflow: "auto",
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Cadastrar Cliente
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Nome do Cliente"
                value={nome}
                onChange={mudarNome}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  value={categoria}
                  onChange={mudarCategoria}
                  label="Categoria"
                >
                  {clientesDisponiveis.map(function (cat) {
                    return (
                      <MenuItem key={cat.id} value={cat.nome}>
                        {cat.nome}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                onClick={adicionarCliente}
                disabled={nome === "" || categoria === ""}
                style={{
                  backgroundColor: "#1976d2",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Cadastrar
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* COLUNA 2: LISTA DE PRODUTOS CADASTRADOS */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Clientes cadastrados
          </Typography>
          <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
            <List>
              {listaClientes.map(function (prod) {
                return (
                  <React.Fragment key={prod.id}>
                    <ListItem>
                      <ListItemText
                        primary={prod.nome}
                        secondary={"Estado: " + prod.categoria}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastroCliente;