import styled from 'styled-components'

export const StylesLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  > .barra-lateral {
    width: 264px;
    height: 100%;
    padding: 24px 10px;
    background-color: ${(props) => props.theme.blue500};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    > ul {
      display: flex;
      gap: 34px;
      flex-direction: column;

      > li {
        color: ${(props) => props.theme.white200};
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header-layout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.blue500};
    padding: 24px;
    color: ${(props) => props.theme.white200};

    > p {
      color: ${(props) => props.theme.white200};
    }
  }
`
