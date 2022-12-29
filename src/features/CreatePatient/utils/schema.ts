import * as yup from "yup";
import type { RequiredStringSchema } from "yup/lib/string";

import {
  DesiredCommunication,
  DocumentType,
  Gender,
  IPatientData,
} from "shared/types";

const fieldCantBeEmpty = "Поле не може бути пустим";

const dateSchema = yup
  .date()
  .required(fieldCantBeEmpty)
  .min("1900-01-01", "Некорректне значення, має бути 1900-01-01 або пізніше")
  .max(
    new Date(),
    "Некорректне значення, можливо вказати лише минулу дату"
  ) as unknown as RequiredStringSchema<string>;

export const schema: yup.SchemaOf<IPatientData> = yup.object({
  lastName: yup.string().required(fieldCantBeEmpty),
  firstName: yup.string().required(fieldCantBeEmpty),
  patronymic: yup.string().required(fieldCantBeEmpty),

  // to do
  VATNumber: yup.string(),

  birthDate: dateSchema,
  gender: yup
    .string()
    .oneOf(
      [Gender.Male, Gender.Female],
      "Некорректна стать"
    ) as unknown as RequiredStringSchema<Gender>,
  birthCountry: yup.string().required(fieldCantBeEmpty),
  birthPlace: yup.string().required(fieldCantBeEmpty),
  desiredCommunicationWay: yup
    .string()
    .oneOf(
      [DesiredCommunication.ByPhone, DesiredCommunication.ByEmail],
      "Некорректний тип звʼязку"
    ) as unknown as RequiredStringSchema<DesiredCommunication>,
  secretWord: yup.string().required(fieldCantBeEmpty).min(6),

  // TODO set required based on selected communication way
  phoneNumber: yup
    .string()
    .required(fieldCantBeEmpty)
    .matches(
      RegExp("\\+38\\(0\\d{2}\\)\\d{3}-\\d{2}-\\d{2}"),
      "Некорректний номер телефона. Приклад +38(066)999-88-77"
    ),
  // TODO set required based on selected communication way
  emailAddress: yup
    .string()
    .required(fieldCantBeEmpty)
    .email("Некорректна електронна адреса. Приклад john.doe@ukr.net"),

  documentType: yup
    .string()
    .oneOf(
      [
        DocumentType.AdditionalProtectionPerson,
        DocumentType.IDPassport,
        DocumentType.PaperPassport,
        DocumentType.PermanentResidency,
        DocumentType.PermanentResidencyUkraine,
        DocumentType.Refugee,
        DocumentType.TemporaryResidencyUkraine,
      ],
      "Некорректний тип документу"
    ) as unknown as RequiredStringSchema<DocumentType>,

  // TODO different validation rules based on document type
  documentSeries: yup.string().required(fieldCantBeEmpty),

  documentIssueDate: dateSchema,
  documentExpireDate: yup
    .date()
    .min("1900-01-01", "Некорректне значення, має бути 1900-01-01 або пізніше")
    .max(
      "2100-01-01",
      "Некорректне значення, має бути 2100-01-01 або раніше"
    ) as unknown as RequiredStringSchema<string>,
  documentOrigin: yup.string().required(fieldCantBeEmpty),
  documentNumber: yup
    .string()
    .matches(
      RegExp("\\d{8}-\\d{5}", "Некорректний номер, приклад 19900101-12345")
    ),
});
