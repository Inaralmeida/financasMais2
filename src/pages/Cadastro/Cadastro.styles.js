import styled from "styled-components";
export const StyleContainerCadastro = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.blue500};

  > section {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    width: 35%;
    height: 100%;
    border-radius: 8px 0 0 8px;
    background: ${(p) => p.theme.white200};
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
      4px 4px 8px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    p{
      display: flex;
      gap: 5px;
    }

    h2 {
      color: ${(p) => p.theme.blue500};
    }

    > div {
      width: 100%;
      display: flex;
      gap: 24px;
    }

    .destaque {
      font-weight: bold;
    }
  }
`;
