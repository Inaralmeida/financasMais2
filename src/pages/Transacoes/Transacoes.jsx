import React from 'react'
import { useParams } from 'react-router-dom'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import Layout from '../../components/shared/Layout/Layout'
import { dataTransacoes } from '../../core/data'

const Transacoes = () => {
  const params = useParams()
  const { usuarios: [usuarioUm] } = dataTransacoes
  const transacoes = usuarioUm.transacoes
  const transacao = {
    id: 'dasdasdasd',
    data: '11/10/2023',
    categoria: 'Salario',
    valor: 10000,
    tipo: 'saida'
  }


  console.log(params)
  return (
    <div>
      <Layout >
        <h2>{params.tipo.toLocaleUpperCase()}</h2>
        {transacoes.map((transacao) => {
          return (
            <Transacao
              key={transacao.id}
              id={transacao.id}
              valor={transacao.valor}
              categoria={transacao.categoria}
              data={transacao.data}
              tipo={transacao.tipo}
            />
          )
        })}
      </Layout>
    </div>
  )
}

export default Transacoes