import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const getCategorias = async () => {
  const resposta = await api.get('/categorias')
  return resposta.data
}

export const getTransacoes = async (idUsuario, tipo) => {
  const resposta = await api.get(`/usuario/${idUsuario}/transacoes/${tipo}`)
  return resposta.data
}

export const postUsuario = async (body, senha) => {
  const config = {
    headers: {
      'X-password': senha,
    },
  }
  const resposta = await api.post('/usuarios', body, config)
  return resposta.data
}

export const loginUsuario = async (email, senha) => {
  try {
    const config = {
      headers: {
        'X-password': senha,
      },
    }

    const resposta = await api.post('/login', { email }, config)

    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}

export const postTransacao = async (body, idUsuario) => {
  try {
    const resposta = await api.post(`/usuario/${idUsuario}/novatransacao`, body)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}

export const putTransacao = async (idTransacao, body, idUsuario) => {
  try {
    const resposta = await api.put(`/usuarios/${idUsuario}/editar/${idTransacao}`, body)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}

export const deleteTransacao = async (idTransacao, idUsuario) => {
  try {
    const resposta = await api.delete(`/usuario/${idUsuario}/deletar/${idTransacao}`)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}
