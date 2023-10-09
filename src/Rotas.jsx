import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro/Cadastro'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import { GlobalStyle } from './style/GlobalStyle'
import { tema } from './style/theme'
import { ThemeProvider } from 'styled-components'
import Dashboard from './pages/Dashboard/Dashboard'
import Transacoes from './pages/Transacoes/Transacoes'

const Rotas = () => {
  return (

    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/transacoes/:id' element={<Transacoes />} />
        </Routes>

      </ThemeProvider>
    </BrowserRouter>

  )
}

export default Rotas

//Criar o arquivo e o componente rotas
//importar o BR -  Pai da aplicação
//importa Routes -  define o que é dinamico e o que é estatico
//Criar as paginas que serão utilizadas
//Importar o Route -  define o path(caminho) de cada pagina
//Importar Themeprovider, tema, e o globalStyle
//Importar o componente rotas na raiz do projeto, main.jsx