import React from "react";
import styled from "styled-components";

const BoxRed = styled.div`
  border: 1px dotted;
  width: 180px;
  height: 260px;
`;

class Produtos extends React.Component {
  render() {
    return (
     <div>
       <BoxRed>
      <img src={this.props.imagem} />
       <p>{this.props.texto}</p>
       <p>{this.props.preco}</p>
       <button>Adicionar ao Carrinho</button>
        </BoxRed >
        
      </div>
    );
  }
}
export default Produtos;
