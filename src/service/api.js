import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const getCategorias = async (endpoint) => {
  const resposta = await api.get(endpoint)
  console.log(resposta.data)
}

export const getTransacoes = async (idUsuario, tipo) => {
  const resposta = await api.get(`/usuario/${idUsuario}/transacoes/${tipo}`)
  return resposta.data
}
