import React from "react";
import Button from "../Button/Button";
import * as S from "./header.styles";
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cadastro')
  }


  return (

    <S.StyleHeader className="content">
      <h1>Finanças+</h1>
      <nav>
        <ul className={"lista_links"}>
          <li>
            <Link className={"link"}>
              Home
            </Link>
          </li>

          <li>
            <Link to='/login' className={"link"}>
              Entrar
            </Link>
          </li>
          <li>
            <Button texto='Criar Conta' variant='primary' onClick={handleClick} />

          </li>
        </ul>
      </nav>
    </S.StyleHeader>
  )
};

export default Header;
