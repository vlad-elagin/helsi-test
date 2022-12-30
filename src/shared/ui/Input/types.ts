import { StandardTextFieldProps } from "@mui/material";
import { FieldMetaState } from "react-final-form";

export interface IInputProps extends StandardTextFieldProps {
  shrinkLabel?: boolean;
  selectOptions?: Array<{ label: string; value: string }>;
  meta: FieldMetaState<any>;
}

export interface IWithSwitchProps extends IInputProps {
  switchValue: boolean;
  onSwitchToggle: (val: boolean) => void;
}
