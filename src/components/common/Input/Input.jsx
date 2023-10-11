import React from "react";
import { tema } from "../../../style/theme";
import { StyleInput } from "./input.styles";

const Input = ({ placeholder, hasError, isValid, required, name, type, value, onChange }) => {
  const variantes = {
    error: `2px solid ${tema.red500}`,
    valid: `2px solid ${tema.green500}`,
  };

  return (
    <StyleInput
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        border: isValid ? variantes.valid : hasError ? variantes.error : "",
      }}
      required={required}
      placeholder={placeholder}
      
    />
  );
};

export default Input;
