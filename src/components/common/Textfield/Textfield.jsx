import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";

const Textfield = ({
  label,
  name,
  type,
  required,
  placeholder,
  value,
  onChange,
  hasError,
}) => {
  return (
    <StyleTextfield>
      <label htmlFor={name}>{label}</label>

      {type === "textarea" ? (
        <StyledTextArea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          name={name}
          required={required}
        />
      ) : (
        <Input
          hasError={hasError}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={type}
          required={required}
        />
      )}
    </StyleTextfield>
  );
};

export default Textfield;

const StyleTextfield = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;

  > label {
    color: ${(p) => p.theme.blue900};
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 132px;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${(p) => p.theme.withe50};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  resize: none;
`;
