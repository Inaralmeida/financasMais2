import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import { theme } from "../../../styles/theme";

const SelectComponent = ({
  label,
  value,
  onChange,
  listOptions,
  width = "100%",
}) => {
  return (
    <div style={{ textAlign: "left", width: width }}>
      <p>{label}</p>
      <FormControl fullWidth variant="standard">
        <Select
          sx={{
            backgroundColor: theme.white50,
            boxShadow: "5px 6px 4px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            padding: "12px",
          }}
          label={label}
          value={value}
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {listOptions &&
            listOptions.map((option) => {
              return (
                <MenuItem
                  selected={option.id === 1}
                  key={option.id}
                  value={option.nome}
                >
                  {option.nome.toUpperCase()}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
