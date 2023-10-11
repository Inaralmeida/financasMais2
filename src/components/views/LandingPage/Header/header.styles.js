import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .logo {
    color: #457b9d;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
  .lista_links {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  
  .link {
    color: #457b9d;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .link:hover {
    opacity: 0.7;
  }
  
  .btn_entrar {
    display: flex;
    padding: 18px 60px;
    align-items: center;
    border-radius: 8px;
    background: #1d3557;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-family: Roboto monospace;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
`;

