import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './Rotas'
import TransacoesProvider from './core/contexto/useTransacoes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransacoesProvider>
      <Rotas />
    </TransacoesProvider>
  </React.StrictMode>
)
