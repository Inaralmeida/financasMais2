import React, { useState } from "react";
import Logo from "../../components/common/Logo/Logo";
import Textfield from "../../components/common/Textfield/Textfield";
import Button from "../../components/common/Button/Button";
import { StyleContainerCadastro } from "./Cadastro.styles";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import cadastro from "/cadastro.svg";

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')


  const navigate = useNavigate()

  const handleCadastro = () => {

    console.log('nome:', nome, '\nsobrenome:', sobrenome)
  }
  return (
    <StyleContainerCadastro>
      <section>
        <Logo fontSize={64} />

        <picture>
          <img
            src={cadastro}
            alt="Vetor homem branco preenchendo um fomulario de satisfação"
          />
        </picture>
      </section>

      <form action="">
        <h2>Cadastro</h2>
        <div>
          <Textfield
            nome="nome"
            label="Nome"
            type="text"
            required
            placeholder="Maria"
            value={nome}
            onChange={(e) => setNome(e)}

          />
          {/* <Textfield
            nome="sobrenome"
            label="Sobrenome"
            type="text"
            required
            placeholder="Silva"

          /> */}
          <input type="text" value={sobrenome} onChange={(evento) => setSobrenome(evento.target.value)} />
        </div>
        <Textfield
          nome="email"
          label="E-mail"
          type="email"
          required
          placeholder="mariasilva@gmail.com"

        />
        <Textfield
          nome="senha"
          label="Senha"
          type="password"
          required
          placeholder="●●●●●●●"

        />
        <Textfield
          nome="confirmaSenha"
          label="Confirmação de Senha"
          type="password"
          required
          placeholder="●●●●●●●"
        />

        <p>
          Ja tem conta tem conta?
          <Link to="/login" className="destaque">
            Faça login
          </Link>
        </p>

        <Button
          width="100%"
          variant='primary'
          texto="Cadastrar"
          onClick={handleCadastro}
        />
      </form>
    </StyleContainerCadastro>
  );
};

export default Cadastro;
