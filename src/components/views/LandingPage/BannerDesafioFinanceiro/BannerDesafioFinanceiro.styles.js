import { styled } from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9f0f0;

  .textos {
    width: 50%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`;
