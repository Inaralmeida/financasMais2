import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import { TransacoesContext } from '../../core/contexto/useTransacoes'

const Dashboard = () => {

  const { entradas, saidas, handleGetTransacoes, totalEntradas, totalSaidas } = useContext(TransacoesContext)

  const [todasTransacoes, setTodasTransacoes] = useState([...entradas, ...saidas])


  useEffect(() => {
    handleGetTransacoes()
    setTodasTransacoes([...entradas, ...saidas])
  }, [])
  return (
    <div>
      <Layout >

        <div>
          <p>
            entradas
            {(totalEntradas).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
          <p>
            saidas
            {totalSaidas}
          </p>
          <p>
            balanço
            {totalEntradas - totalSaidas}
          </p>
        </div>
        <ul>


          {
            todasTransacoes.length > 0 && todasTransacoes.map(transacao => {
              return (
                <Transacao
                  id={transacao.id}
                  data={transacao.data}
                  categoria={transacao.categoria}
                  valor={transacao.valor}
                  tipo={transacao.tipo}
                />
              )
            })
          }
        </ul>
      </Layout>

    </div>

  )
}

export default Dashboard