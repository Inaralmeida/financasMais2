import React from "react";
import banner2 from "/LP-banner2.svg";
import { StyledContainer } from "./BannerDesafioFinanceiro.styles";

const BannerDesafioFinanceiro = () => {
  return (
    <StyledContainer>
      <div className={`content `}>
        <picture>
          <img src={banner2} alt="" />
        </picture>

        <div className={"textos"}>
          <h2>O desafio Financeiro</h2>

          <h3>
            Sabemos que lidar com finanças pode ser um desafio para muitas
            pessoas.
          </h3>

          <p>
            {" "}
            A falta de organização, o desconhecimento das despesas e o medo de
            não conseguir atingir suas metas financeiras são obstáculos comuns
            enfrentados por todos nós.{" "}
          </p>

          <p>
            É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar
            esses desafios e alcançar a liberdade financeira que você tanto
            deseja.
          </p>
        </div>
      </div>
    </StyledContainer>
  );
};

export default BannerDesafioFinanceiro;
