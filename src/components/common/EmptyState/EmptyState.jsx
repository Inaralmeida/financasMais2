import React from 'react'
import EmptyStateImage from "/images/empty-state.svg"
import { styled } from 'styled-components'

const EmptyState = () => {
  return (
    <StyleEmptyState>
        <img src={EmptyStateImage} alt="Não há nada por aqui, adicione uma nova transação pra começar" />
        <p>Não há nada por aqui, adicione uma nova transação pra começar</p>
    </StyleEmptyState>
  )
}

export default EmptyState

const StyleEmptyState = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:16px;flex-direction:column;

`