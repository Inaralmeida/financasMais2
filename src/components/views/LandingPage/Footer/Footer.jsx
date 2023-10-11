import React from "react";
import { StyleFooter, StyleItemlist, StyleListFooter } from "./footer.styles";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PhoneCall,
} from "@phosphor-icons/react";
import { tema } from "../../../../style/theme";

const Footer = () => {
  return (
    <StyleFooter>
      <div className="content">
        <section>
          <StyleListFooter>
            <StyleItemlist>
            </StyleItemlist>
            <StyleItemlist className="icon">
              <EnvelopeSimple color={tema.white50} size={20} weight="fill" />
              financasmais@gmail.com
            </StyleItemlist>
            <StyleItemlist className="icon">
              <PhoneCall color={tema.white50} size={20} weight="fill" />
              0800 987 6543
            </StyleItemlist>
          </StyleListFooter>
        </section>

        <section>
          <StyleListFooter>
            <StyleItemlist>Sobre nós</StyleItemlist>
            <StyleItemlist>perguntas Frequentes</StyleItemlist>
            <StyleItemlist>Política de Privacidade</StyleItemlist>
            <StyleItemlist>Termos de Uso</StyleItemlist>
            <StyleItemlist>Carreiras</StyleItemlist>
          </StyleListFooter>
        </section>
        <section>
          <StyleListFooter className="socials">
            <StyleItemlist className="social">
              <FacebookLogo weight="thin" size={30} color={tema.white50} />
            </StyleItemlist>
            <StyleItemlist className="social">
              <InstagramLogo weight="thin" size={30} color={tema.white50} />
            </StyleItemlist>
            <StyleItemlist className="social">
              <LinkedinLogo weight="thin" size={30} color={tema.white50} />
            </StyleItemlist>
          </StyleListFooter>
        </section>
      </div>
    </StyleFooter>
  );
};

export default Footer;
