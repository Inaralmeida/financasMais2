import React from "react";
import styled from "styled-components";

const Box = ({
  width,
  height,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}) => {
  return (
    <StyleBox
      width={width}
      height={height}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </StyleBox>
  );
};

export default Box;

export const StyleBox = styled.div`
  width: ${(p) => (p.width ? p.width : "fit-content")};
  height: ${(p) => (p.height ? p.height : "fit-content")};
  padding-top: ${(p) => (p.paddingTop ? p.paddingTop : "12px")};
  padding-bottom: ${(p) => (p.paddingBottom ? p.paddingBottom : "12px")};
  padding-left: ${(p) => (p.paddingLeft ? p.paddingLeft : "12px")};
  padding-right: ${(p) => (p.paddingRight ? p.paddingRight : "12px")};
  border-radius: 8px;
  background: ${(p) => p.theme.white200};
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
`;
