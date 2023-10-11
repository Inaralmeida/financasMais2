import { Plus } from "@phosphor-icons/react";
import styled from "styled-components";
import React from "react";
import { tema } from "../../../style/theme";

const Logo = ({ fontSize, cor }) => {
  const corLogo = cor === "azul" ? tema.blue500 : tema.white50;
  return (
    <StyleLogo fontSize={fontSize} color={corLogo}>
      Finanças <Plus size={fontSize} weight="bold" color={corLogo} />
    </StyleLogo>
  );
};

export default Logo;

const StyleLogo = styled.h1`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.fontSize}px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.color};
`;
