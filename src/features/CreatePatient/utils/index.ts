import { patternize } from "string-patternizer";

import { IFormSchema } from "../types";

export const phoneNumberMask = "\\+38(0dd)ddd-dd-dd";
export const documentNumberMask = "dddddddd-ddddd";

export const parseInputValue = (pattern: string, maxLength: number) => {
  return (value: string) => {
    const parsed = patternize(pattern, value);
    if (
      value[value.length - 1] !== parsed[parsed.length - 1] &&
      value.length <= maxLength
    ) {
      return value;
    }
    return parsed;
  };
};

export const initialValues: IFormSchema = {
  lastName: "",
  firstName: "",
  patronymic: "",
  VATNumber: "",
  birthDate: "",
  gender: "",
  birthCountry: "",
  birthPlace: "",
  desiredCommunicationWay: "",
  secretWord: "",
  phoneNumber: "",
  emailAddress: "",
  documentType: "",
  documentSeries: "",
  documentIssueDate: "",
  documentExpireDate: "",
  documentOrigin: "",
  documentNumber: "",
};

export * from "./selectOptions";
