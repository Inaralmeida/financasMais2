import styled from "styled-components";

export const StyleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: ${(props) => props.theme.blue200};

  .content {
    > .textos {
      display: flex;
      width: 600px;
      height: 305px;
      padding: 24px 36px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
    }

    > form {
      display: flex;
      padding: 24px 0px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      flex: 1 0 0;
    }
  }
`;
