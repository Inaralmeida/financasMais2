import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import Logo from '../../components/common/Logo/Logo';
import Textfield from '../../components/common/Textfield/Textfield';
import { StyleContainerLogin } from './login.styles'
import login from "/login1.svg";

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
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
          <p>
            Ainda não tem conta?{" "}
            <Link to="/cadastro" className="destaque">
              Cadastre-se
            </Link>
          </p>
          <Button
            texto="Entrar"
            width="100%"
            onClick={() => Navigate('/dashboard')}
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