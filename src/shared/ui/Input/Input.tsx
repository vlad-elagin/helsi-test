import React from "react";
import { TextField, InputLabelProps, SelectProps } from "@mui/material";

import { IInputProps } from "./types";

export const Input: React.FC<IInputProps> = ({
  shrinkLabel,
  selectOptions,
  meta,
  ...inputProps
}) => {
  const InputLabelProps: Partial<InputLabelProps> = {
    shrink: shrinkLabel,
  };

  const SelectProps: Partial<SelectProps> = {
    native: inputProps.select,
  };

  return (
    <TextField
      {...inputProps}
      error={meta.modified && Boolean(meta.error)}
      helperText={
        meta.modified && Boolean(meta.error)
          ? meta.error
          : inputProps.helperText
      }
      InputLabelProps={InputLabelProps}
      SelectProps={SelectProps}
      size="small"
      variant="standard"
      fullWidth
    >
      {inputProps.select && selectOptions ? (
        <>
          <option disabled value="">
            - Вибрати -
          </option>
          {selectOptions.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </>
      ) : null}
    </TextField>
  );
};
