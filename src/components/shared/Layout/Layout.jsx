import React from 'react'
import Logo from '../../common/Logo/Logo'
import { Link } from 'react-router-dom'
import { StylesLayout } from './Layout.styles'

const Layout = ({ children }) => {
  return (
    <StylesLayout>
      <aside className='barra-lateral'>
        <Logo />
        <ul>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Entradas</Link>
          </li>
          <li>
            <Link>Saidas</Link>
          </li>
        </ul>
      </aside>
      <div>
        <header className='header-layout'>
          <p>Olá, Admin</p>
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

