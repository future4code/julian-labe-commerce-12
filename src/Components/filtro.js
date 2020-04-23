import React from "react";
import styled from "styled-components";

const FiltroContainer = styled.nav`
  min-width: 200px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;
class Filtro extends React.Component {
  render() {
    return (
      <div>
        <FiltroContainer>
          <h2>Filtros:</h2>
          <label>Valor minimo:</label>
          <input />
          <label>Valor máximo:</label>
          <input />
          <label>Buscar Produto</label>
          <input />
        </FiltroContainer>
        <hr/>
        <FiltroContainer>
          <h4>Quantidade de Produtos:</h4>
          <select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </select>
        </FiltroContainer>
      </div>
    );
  }
}
export default Filtro;
