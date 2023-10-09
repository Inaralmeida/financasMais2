import styled from 'styled-components'

export const StyleContainer = styled.section`
  width: 100%;
  height: fit-content;
  background-image: url('/background-Section-1.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;

  .textos {
    width: 50%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`
