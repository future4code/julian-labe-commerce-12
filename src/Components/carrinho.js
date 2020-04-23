import React from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.nav`
  min-width: 200px;
  border-left: 1px solid gray;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <CarrinhoContainer>
        <h2>Carrinho</h2>
        <label>Compras</label>
        <ul>
          <li></li>
        </ul>
      </CarrinhoContainer>
    );
  }
}
export default Carrinho;
