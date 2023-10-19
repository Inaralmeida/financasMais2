import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TransacoesContext } from '../../../core/contexto/useTransacoes'
import Logo from '../../common/Logo/Logo'
import { StylesLayout } from './Layout.styles'

const Layout = ({ children }) => {

  const { nome } = useContext(TransacoesContext)
  return (
    <StylesLayout>
      <aside className='barra-lateral'>
        <Logo />
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/transacoes/entrada'>Entradas</Link>
          </li>
          <li>
            <Link to='/transacoes/saída'>Saidas</Link>
          </li>
        </ul>
      </aside>
      <div>
        <header className='header-layout'>
          <p>Olá, {nome}</p>
          <Link >Sair</Link>
        </header>
        <main>
          {children}
        </main>
      </div>
    </StylesLayout>
  )
}

export default Layout

