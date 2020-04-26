import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 12%;
  background: black;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const Imagem = styled.img`
  text-align: center;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Imagem src={logo} />
      </HeaderContainer>
    );
  }
}
export default Header;
