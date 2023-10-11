import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'

const Dashboard = () => {

  const transacao = {
    id: 'dasdasdasd',
    data: '11/10/2023',
    categoria: 'Salario',
    valor: 10000,
    tipo: 'saida'
  }



  return (
    <div>
      <Layout >
        <Transacao
          id={transacao.id}
          data={transacao.data}
          categoria={transacao.categoria}
          valor={transacao.valor}
          tipo={transacao.tipo}
        />
      </Layout>

    </div>

  )
}

export default Dashboard