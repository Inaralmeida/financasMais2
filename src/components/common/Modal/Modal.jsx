import { X } from "@phosphor-icons/react";
import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Modal = ({ open, title, onClose, children }) => {
  const handleClose = (e) => {
    e.target.id === "modal" && onClose();
  };
  return (
    <>
      {open && (
        <StylesModal id="modal" onClick={handleClose}>
          <StylesContentModal>
            <section className="header">
              <h2>{title}</h2>
              <X
                color={theme.blue500}
                onClick={onClose}
                cursor="pointer"
                size={32}
              />
            </section>
            {children}
          </StylesContentModal>
        </StylesModal>
      )}
    </>
  );
};

export default Modal;

const StylesModal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(38, 50, 56, 0.6);
`;

const StylesContentModal = styled.div`
  display: flex;
  width: 401px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${(p) => p.theme.white200};
  box-shadow: 4px 7px 21px 0px #263238, -4px -7px 21px 0px #263238;

  > .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      color: ${(p) => p.theme.blue500};
    }
  }
`;
