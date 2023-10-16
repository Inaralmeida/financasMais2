import styled from 'styled-components'

export const StylesTransacoes = styled.main`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;

  > section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > ul {
    width: 100%;
    height: max-content;
    background-color: ${(props) => props.theme.green50};
    border-radius: 8px;
    overflow-y: auto;
    padding: 24px;
    gap: 12px;
    display: flex;
    flex-direction: column;
  }
`
