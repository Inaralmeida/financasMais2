import React from "react";
import Button from "../../../common/Button/Button";
import { StyleContainer } from "./BannerComeceAgora.styles";
import Input from "../../../common/Input/Input";

const BannerComeceAgora = () => {
  return (
    <StyleContainer>
      <div className="content">
        <div className="textos">
          <h2>Transforme sua relação com o dinheiro</h2>
          <p>
            Cadastre-se no Finanças+ agora mesmo e comece sua jornada rumo a uma
            vida financeira mais próspera e realizada
          </p>
        </div>
        <form action="">
          <Input placeholder="Seu melhor e-mail " />
          <Button texto="Comece Agora" />
        </form>
      </div>
    </StyleContainer>
  );
};

export default BannerComeceAgora;
