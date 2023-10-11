import React from "react";
import banner1 from "/LP-banner1.svg";
import { StyleContainer } from "./BannerBemVindos.styles";

const BannerBemVindos = () => {
  return (
    <StyleContainer>
      <div className="content">
        <div className="textos">
          <h2>Bem-vindo ao Finanças+</h2>

          <h3>
            O seu aliado para uma gestão financeira bem-sucedida e a realização
            dos seus objetivos financeiros.
          </h3>

          <p>
            Nosso aplicativo foi projetado para proporcionar a você o controle
            total sobre suas finanças pessoais, tornando o processo de gerenciar
            suas receitas, despesas e metas financeiras uma tarefa simples e
            prazerosa.
          </p>
        </div>

        <picture>
          <img src={banner1} alt="" />
        </picture>
      </div>
    </StyleContainer>
  );
};

export default BannerBemVindos;
