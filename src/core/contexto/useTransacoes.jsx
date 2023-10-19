
import { createContext, useState } from "react";
import { getCategorias, getTransacoes } from "../../service/api";

export const TransacoesContext = createContext({})

const TransacoesProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])
  const [entradas, setEntradas] = useState([])
  const [saidas, setSaidas] = useState([])
  const [totalEntradas, setTotalEntradas] = useState(0)
  const [totalSaidas, setTotalSaidas] = useState(0)


  const nome = 'Thaise'

  async function hendleBuscaCategorias() {
    const resposta = await getCategorias()
    setCategorias(resposta.data)
  }


  const handleGetTransacoes = async () => {
    const respostaEntradas = await getTransacoes('a57501f9407c2174825bb862860ec23a', 'entrada')
    const respostaSaidas = await getTransacoes('a57501f9407c2174825bb862860ec23a', 'saída')

    setEntradas(respostaEntradas.data)
    setSaidas(respostaSaidas.data)
    console.log(respostaEntradas.data)
    setTotalEntradas(respostaEntradas.data.map(item => Number(item.valor)).reduce((a, b) => a + b, 0))
    setTotalSaidas(respostaSaidas.data.map(item => Number(item.valor)).reduce((a, b) => a + b, 0))
  }


  const value = {
    nome,
    categorias,
    entradas,
    saidas,
    totalEntradas,
    totalSaidas,
    handleGetTransacoes,
    hendleBuscaCategorias,
  }
  return (
    <TransacoesContext.Provider value={value}>
      {children}
    </TransacoesContext.Provider>
  )
}

export default TransacoesProvider