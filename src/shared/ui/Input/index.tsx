import React from "react";

import {
  TextField,
  StandardTextFieldProps,
  InputAdornment,
  Switch,
  InputLabelProps,
  InputProps,
  SelectProps,
} from "@mui/material";

interface IInputProps extends StandardTextFieldProps {
  shrinkLabel?: boolean;
  switchValue?: boolean;
  onSwitchToggle?: (toggled: boolean) => void;
  selectOptions?: Array<{ label: string; value: string }>;
}

export const Input: React.FC<IInputProps> = ({
  shrinkLabel,
  switchValue,
  onSwitchToggle,
  selectOptions,
  ...inputProps
}) => {
  const InputLabelProps: Partial<InputLabelProps> = {
    shrink: shrinkLabel,
  };

  const SelectProps: Partial<SelectProps> = {
    native: inputProps.select,
  };

  const InputProps: Partial<InputProps> = {
    endAdornment: Boolean(onSwitchToggle) ? (
      <InputAdornment position="end">
        <Switch size="small" value={switchValue} />
      </InputAdornment>
    ) : null,
  };

  return (
    <TextField
      {...inputProps}
      InputLabelProps={InputLabelProps}
      SelectProps={SelectProps}
      InputProps={InputProps}
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
