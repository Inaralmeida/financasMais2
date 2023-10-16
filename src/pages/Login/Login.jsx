import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import Logo from '../../components/common/Logo/Logo';
import Textfield from '../../components/common/Textfield/Textfield';
import { StyleContainerLogin } from './login.styles'
import login from "/login1.svg";
import { loginUsuario } from '../../service/api';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState()

  async function handleLogin(e) {
    e.preventDefault()
    const resposta = await loginUsuario(email, senha)

    if (resposta.success) {
      navigate('/dashboard')
      localStorage.setItem('id', resposta.data.id)
      localStorage.setItem('nome', resposta.data.nome)
    } else {
      setError(resposta.message)
    }
    console.log(resposta)
  }

  return (
    <StyleContainerLogin>
      <div className="content">
        <form>
          <Logo cor="azul" />

          <Textfield
            label="Email"
            name="email"
            placeholder="email@email.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e)}

          />

          <Textfield
            label="Senha"
            name="senha"
            placeholder="●●●●●●●"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p>
            Ainda não tem conta?{" "}
            <Link to="/cadastro" className="destaque">
              Cadastre-se
            </Link>
          </p>
          <Button
            texto="Entrar"
            width="100%"
            variant='primary'
            onClick={handleLogin}
          />
        </form>

        <picture>
          <img
            src={login}
            alt="Imagem de um usuario preenchendo um formulario de login"
          />
        </picture>
      </div>
    </StyleContainerLogin>
  )
}

export default Login