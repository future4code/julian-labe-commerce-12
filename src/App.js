import React from "react";
import Filtro from "./Components/filtro";
import Produtos from "./Components/produtos";
import Carrinho from "./Components/carrinho";
import styled from "styled-components";

//.videos-container {
const ProdutosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

//.app-container {
const AppContainer = styled.div`
  display: flex;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: Date.now(),
        name: "",
        value: 1000,
        imageUrl: "https://picsum.photos/200/200?a=1"
      }
    ]
  };

  render() {
    return (
      <AppContainer className="paginaCompleta">
        <Filtro />
        <ProdutosContainer>
          <Produtos imagem="https://images2.imgbox.com/bc/34/wbCI9w1O_o.jpg" texto="Item A" preco="R$"/>
          <Produtos imagem="https://images2.imgbox.com/27/be/Icdha7rz_o.jpg" texto="Item B" preco="R$"/>
          <Produtos texto="Item C"/>
          <Produtos texto="Item D"/>
          <Produtos texto="Item E"/>
          <Produtos texto="Item F"/>
          <Produtos texto="Item G"/>
          <Produtos texto="Item H"/>
        </ProdutosContainer>
        <Carrinho />
      </AppContainer>
    );
  }
}

export default App;
