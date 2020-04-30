import React from "react";
import Header from "./Components/Header";
import Filtro from "./Components/Filtro";
import Carrinho from "./Components/carrinho";
import styled from "styled-components";
import Footer from "./Components/Footer";

const Body = styled.body`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 110vh;
  font-family: sans-serif;
  background-color: #d3d3d3;
`;
const ProdutosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const AppContainer = styled.div`
  display: flex;
  padding-left: 5%;
`;

const BoxRed = styled.div`
  border: 1px dotted green;
  border-radius: 5px;
  width: 180px;
  height: 250px;
  text-align: center;
`;
const Button = styled.button`
  height: 25px;
  border-radius: 5px;
  color: #094b05;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Item A",
        valor: 60,
        imgUrl: "https://images2.imgbox.com/bc/34/wbCI9w1O_o.jpg"
      },
      {
        id: 2,
        name: "Item B",
        valor: 80,
        imgUrl: "https://images2.imgbox.com/27/be/Icdha7rz_o.jpg"
      },
      {
        id: 3,
        name: "Item C",
        valor: 50,
        imgUrl: "https://images2.imgbox.com/0d/48/4ppZval6_o.jpg"
      },
      {
        id: 4,
        name: "Item D",
        valor: 15,
        imgUrl: "https://images2.imgbox.com/b3/09/DVZr6gUF_o.jpg"
      },
      {
        id: 5,
        name: "Item E",
        valor: 80,
        imgUrl: "https://images2.imgbox.com/81/a0/nvCOvMZs_o.jpg"
      },
      {
        id: 6,
        name: "Item F",
        valor: 45,
        imgUrl: "https://images2.imgbox.com/c7/94/dKPN1ZhS_o.jpg"
      },
      {
        id: 7,
        name: "Item G",
        valor: 180,
        imgUrl: "https://images2.imgbox.com/e5/77/bhAe4vq4_o.jpg"
      },
      {
        id: 8,
        name: "Item E",
        valor: 60,
        imgUrl: "https://images2.imgbox.com/92/1f/VwCJw8Gt_o.jpg"
      }
    ],
    car: [],
    InputMin: "",
    InputMax: ""
  };

  // const filtrarValores = this.state.produtos.map(valorMin, valorMax => {
  //   return(
  //     if(inputMin <= inputMax)

  //   )  //é nessa pegada mesmo
  // })
   

  render() {
    const gradeDeProdutos = this.state.produtos.map(produto => {
      return (
        <BoxRed>
          <img src={produto.imgUrl} />
          <p>
            <b>{produto.name}</b>
          </p>
          <p>R$ {produto.valor}</p>
          <Button onClick={this.adicionarNoCar}>Adicionar ao Carrinho</Button>
        </BoxRed>
      );
    });
    return (
      <Body>
        <Header />
        <AppContainer>
          <Filtro quantidade={this.state.produtos.length} />
          <ProdutosContainer>{gradeDeProdutos}</ProdutosContainer>
          <Carrinho />
        </AppContainer>
        <Footer />
      </Body>
    );
  }
}

export default App;
