import React from "react";
import { InputAdornment, InputProps, Switch } from "@mui/material";

import { IWithSwitchProps } from "./types";
import { Input } from "./Input";

export const InputWithSwitch: React.FC<IWithSwitchProps> = ({
  switchValue,
  onSwitchToggle,
  ...rest
}) => {
  const [readOnly, setReadOnly] = React.useState(!switchValue);

  React.useEffect(() => {
    // reset the value for disabled switch and make input readonly
    if (!switchValue) {
      // @ts-expect-error onChange handler is overriden by final-form
      // and should accept plain string as argument
      rest.onChange("");
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [switchValue]);

  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onSwitchToggle(checked);
  };

  const InputProps: Partial<InputProps> = {
    endAdornment: Boolean(onSwitchToggle) ? (
      <InputAdornment position="end">
        <Switch
          size="small"
          checked={switchValue}
          onChange={handleSwitchToggle}
        />
      </InputAdornment>
    ) : null,
  };

  return (
    <Input
      {...rest}
      inputProps={{ ...(rest.inputProps || {}), readOnly, disabled: readOnly }}
      InputProps={{ ...(rest.InputProps || {}), ...InputProps }}
    />
  );
};
