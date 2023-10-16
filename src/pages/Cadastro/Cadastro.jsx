import React, { useState } from "react";
import Logo from "../../components/common/Logo/Logo";
import Textfield from "../../components/common/Textfield/Textfield";
import Button from "../../components/common/Button/Button";
import { StyleContainerCadastro } from "./Cadastro.styles";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import cadastro from "/cadastro.svg";
import { postUsuario } from "../../service/api";

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')


  const navigate = useNavigate()

  const handleCadastro = async (e) => {
    e.preventDefault()

    const body = {
      nome,
      sobrenome,
      email
    }

    if (senha === confirmaSenha) {
      const resposta = await postUsuario(body, senha)
      localStorage.setItem('id', resposta.data.id)
      localStorage.setItem('nome', resposta.data.nome)
      console.log(resposta)

    } else {
      console.log('as senhas precisam ser iguais')
    }

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
          <Textfield
            nome="sobrenome"
            label="Sobrenome"
            type="text"
            required
            placeholder="Silva"
            value={sobrenome}
            onChange={(e) => setSobrenome(e)}

          />

        </div>
        <Textfield
          nome="email"
          label="E-mail"
          type="email"
          required
          placeholder="mariasilva@gmail.com"
          value={email}
          onChange={(e) => setEmail(e)}

        />
        <Textfield
          nome="senha"
          label="Senha"
          type="password"
          required
          placeholder="●●●●●●●"
          value={senha}
          onChange={(e) => setSenha(e)}
        />
        <Textfield
          nome="confirmaSenha"
          label="Confirmação de Senha"
          type="password"
          required
          placeholder="●●●●●●●"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e)}
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
