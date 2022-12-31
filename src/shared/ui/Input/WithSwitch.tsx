import React from "react";
import { InputAdornment, InputProps, Switch } from "@mui/material";

import { IWithSwitchProps } from "./types";
import { Input } from "./Input";

export const InputWithSwitch: React.FC<IWithSwitchProps> = ({
  switchValue,
  onSwitchToggle,
  helperText,
  ...rest
}) => {
  const [switchIsOn, setSwitch] = React.useState(switchValue);

  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    // reset the value for disabled switch and make input readonly
    if (!checked) {
      // @ts-expect-error onChange handler is overriden by final-form
      // and should accept plain string as argument
      rest.onChange("");
    }

    setSwitch(checked);
    onSwitchToggle(checked);
  };

  const InputProps: Partial<InputProps> = {
    endAdornment: Boolean(onSwitchToggle) ? (
      <InputAdornment position="end">
        <Switch
          size="small"
          checked={switchIsOn}
          onChange={handleSwitchToggle}
        />
      </InputAdornment>
    ) : null,
  };

  return (
    <Input
      {...rest}
      inputProps={{
        ...(rest.inputProps || {}),
        readOnly: !switchIsOn,
        disabled: !switchIsOn,
      }}
      InputProps={{ ...(rest.InputProps || {}), ...InputProps }}
      helperText={switchIsOn ? undefined : helperText}
    />
  );
};
