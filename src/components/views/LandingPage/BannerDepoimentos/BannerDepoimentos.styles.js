import styled from "styled-components";

export const StyleContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  > .content {
    .textos {
      display: flex;
      padding: 0px 54px;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
    }
  }
`;
