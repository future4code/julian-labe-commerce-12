import React from "react";
import styled from "styled-components";

const FiltroContainer = styled.nav`
  min-width: 200px;
  margin-right: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 20px;
  border-radius: 5px;
`;

const Select = styled.select`
  height: 25px;
  border-radius: 5px;
`;

class Filtro extends React.Component {
  state = {
    garrafao: [],

    min: "",
    max: "",
    buscarProduto: ""
  };

  onchangeMin = event => {
    this.setState({ min: event.target.value });
  };
  
  onchangeMax = event => {
    this.setState({ max: event.target.value });
  };

  buscarProduto = event => {
    this.setState({ buscarProduto: event.target.value });
  };

  render() {
    return (
      <div>
        <FiltroContainer>
          <h2>Filtros:</h2>
          <label>Valor minimo:</label>
          <Input onChange={this.onchangeMin} value={this.state.value} />
          <label>Valor máximo:</label>
          <Input onChange={this.onchangeMax} value={this.state.value} />
          <label>Buscar Produto</label>
          <Input onChange={this.buscarProduto} value={this.state.value} />
        </FiltroContainer>
        <br />
        <FiltroContainer>
          <span>
            <b>Quantidade de Produtos: </b>
            {this.props.quantidade}
          </span>
          <hr />
          <Select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </Select>
        </FiltroContainer>
      </div>
    );
  }
}

export default Filtro;
