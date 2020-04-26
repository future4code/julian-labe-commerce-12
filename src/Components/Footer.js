import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 10%;
  background: black;
  border: 50px;
  border-radius: 10px;
  position: absolute;
  margin-top: 15px;
  margin-bottom: 0;
`;
const Texto = styled.p`
  color: white;
  text-align: center;
  font-size: 15px;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Texto>
          Projeto idealizado por: Felipe Gomes, Max Assis e Nathália Costa{" "}
        </Texto>
      </FooterContainer>
    );
  }
}
export default Footer;
