import styled from "styled-components";
export const StyleInput = styled.input`
  border-radius: 8px;
  background: ${(props) => props.theme.white50};
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 12px;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 2px solid transparent;
  color: ${(props) => props.theme.blue900};

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.blue700};
  }
`;
