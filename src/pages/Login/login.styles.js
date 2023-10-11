import styled from "styled-components";
export const StyleContainerLogin = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.blue500};

  > .content {
    display: flex;
    padding: 48px;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: ${(p) => p.theme.white50};
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
      4px 4px 8px 0px rgba(0, 0, 0, 0.25);

    > form {
      border-radius: 16px;
      background: ${(p) => p.theme.white200};
      box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      padding: 24px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;

      .destaque {
        font-weight: bold;
      }
    }
  }
`;
