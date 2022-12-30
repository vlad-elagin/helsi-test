import type { RequiredStringSchema } from "yup/lib/string";

import {
  DesiredCommunication,
  DocumentType,
  Gender,
  IPatientData,
} from "shared/types";
import yup from "shared/yup-extended";
import { IFormSchema } from "../types";

const fieldCantBeEmpty = "Поле не може бути пустим";
const desiredCommunicationFieldCantBeEmpty =
  "Поле обраного способу звʼязку не може бути пустим";

const dateSchema = yup
  .date()
  .emptyAsUndefined()
  .required(fieldCantBeEmpty)
  .notTooOld()
  .onlyPast() as unknown as RequiredStringSchema<string>;

const schema: yup.SchemaOf<IPatientData> = yup.object({
  /**
   * Basic info
   */
  lastName: yup.string().required(fieldCantBeEmpty),
  firstName: yup.string().required(fieldCantBeEmpty),
  patronymic: yup
    .string()
    .when("$hasPatronymic", (hasPatronymic, schema) =>
      hasPatronymic ? schema.required(fieldCantBeEmpty) : schema
    ),
  VATNumber: yup
    .string()
    .VATNumber()
    .when("$hasVATNumber", (hasVATNumber, schema) =>
      hasVATNumber ? schema.required(fieldCantBeEmpty) : schema
    ),
  birthDate: dateSchema,
  gender: yup.string().gender() as unknown as RequiredStringSchema<Gender>,
  birthCountry: yup.string().required(fieldCantBeEmpty),
  birthPlace: yup.string().required(fieldCantBeEmpty),

  /**
   * Contacts
   */
  desiredCommunicationWay: yup
    .string()
    .communicationWay() as unknown as RequiredStringSchema<DesiredCommunication>,
  secretWord: yup
    .string()
    .required(fieldCantBeEmpty)
    .min(6, "Має бути 6 і більше символів"),

  phoneNumber: yup
    .string()
    .phoneNumber()
    .when("desiredCommunicationWay", {
      is: DesiredCommunication.ByPhone,
      then: (schema) => schema.required(desiredCommunicationFieldCantBeEmpty),
    }),
  emailAddress: yup
    .string()
    .email("Некорректна електронна адреса. Приклад john.doe@ukr.net")
    .when("desiredCommunicationWay", {
      is: DesiredCommunication.ByEmail,
      then: (schema) => schema.required(desiredCommunicationFieldCantBeEmpty),
    }),

  /**
   * Documents
   */
  documentType: yup
    .string()
    .document() as unknown as RequiredStringSchema<DocumentType>,
  documentSeries: yup.string().documentSeries().required(fieldCantBeEmpty),

  documentIssueDate: dateSchema,
  documentExpireDate: yup
    .date()
    .emptyAsUndefined()
    .notTooOld()
    .max(
      "2100-01-01",
      "Некорректне значення, має бути 2100-01-01 або раніше"
    ) as unknown as RequiredStringSchema<string>,
  documentOrigin: yup.string().required(fieldCantBeEmpty),
  documentNumber: yup.string().documentNumber(),
});

export const validate = async (
  values: IFormSchema,
  context: { hasPatronymic: boolean; hasVATNumber: boolean }
) => {
  try {
    await schema.validate(values, { abortEarly: false, context });
  } catch (e: any) {
    if (e.name === "ValidationError" && Array.isArray(e.inner)) {
      return (e.inner as Array<yup.ValidationError>).reduce(
        (acc, { path, message }) => {
          acc[path!] = message;
          return acc;
        },
        {} as Record<string, string>
      );
    }
  }
};
