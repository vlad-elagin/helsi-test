import React from "react";

import TextField, { TextFieldProps } from "@mui/material/TextField";

const Input: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      InputLabelProps={{ shrink: true }}
      size="small"
      variant="standard"
      fullWidth
    />
  );
};

export default Input;
