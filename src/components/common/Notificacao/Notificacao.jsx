import React, { useEffect } from 'react'
import styled from 'styled-components'

const Notificacao = ({ texto, tipo, open, fecharNotificacao }) => {
  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        fecharNotificacao()
      }, 3000)
    }
  }, [open])
  return (
    <StyleNotificacao className={tipo === 'sucesso' ? 'sucesso' : 'falha'}>
      <p>{texto}</p>
    </StyleNotificacao>
  )
}

export default Notificacao

const StyleNotificacao = styled.div`
  width: fit-content;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10vh;
  left: 50%;

  &.sucesso{
    border: 2px solid ${props => props.theme.green500};
    background: ${props => props.theme.green50};
    color: ${props => props.theme.green500};
  }

 &.falha{
    border: 2px solid ${props => props.theme.red500};
    background: ${props => props.theme.red50};
    color: ${props => props.theme.red500};
  }
`