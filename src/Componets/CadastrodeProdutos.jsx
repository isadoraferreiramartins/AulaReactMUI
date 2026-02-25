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

// Importações dos arquivos JSON internos
import { categoriasDisponiveis } from "../Dados/data";
import { produtosIniciais } from "../Dados/dadosProdutos";

function CadastrodeProdutos() {
  // 1. ESTADOS (Memória)
  const [nome, setNome] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  // Criamos uma lista na memória que começa com os dados do arquivo
  const [listaProdutos, setListaProdutos] = React.useState(produtosIniciais);

  // 2. FUNÇÕES DE MANIPULAÇÃO (Handlers)
  function mudarNome(event) {
    setNome(event.target.value);
  }

  function mudarCategoria(event) {
    setCategoria(event.target.value);
  }

  function adicionarProduto() {
    // Criamos um novo objeto com os dados digitados
    const novoItem = {
      id: Math.random(), // Gera um ID temporário
      nome: nome,
      categoria: categoria,
    };

    // Adicionamos o novo item à lista existente
    // Usamos o padrão de "espalhar" os itens antigos e somar o novo
    setListaProdutos([...listaProdutos, novoItem]);

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
              Cadastrar Novo
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Nome do Produto"
                value={nome}
                onChange={mudarNome}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={categoria}
                  onChange={mudarCategoria}
                  label="Categoria"
                >
                  {categoriasDisponiveis.map(function (cat) {
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
                onClick={adicionarProduto}
                disabled={nome === "" || categoria === ""}
                style={{
                  backgroundColor: "#1976d2",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Adicionar à Lista
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* COLUNA 2: LISTA DE PRODUTOS CADASTRADOS */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Produtos no Sistema
          </Typography>
          <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
            <List>
              {listaProdutos.map(function (prod) {
                return (
                  <React.Fragment key={prod.id}>
                    <ListItem>
                      <ListItemText
                        primary={prod.nome}
                        secondary={"Categoria: " + prod.categoria}
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

export default CadastrodeProdutos;
