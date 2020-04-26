import React from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.nav`
  min-width: 200px;
  border-left: 1px solid gray;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Lista = styled.ul`
  list-style-type: circle;
  align-self: flex-start;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <CarrinhoContainer>
        <h1>Carrinho</h1>
        <Lista />
      </CarrinhoContainer>
    );
  }
}
export default Carrinho;
