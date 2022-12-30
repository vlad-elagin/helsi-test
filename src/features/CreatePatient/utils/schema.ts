import * as yup from "yup";
import type { RequiredStringSchema } from "yup/lib/string";

import {
  DesiredCommunication,
  DocumentType,
  Gender,
  IPatientData,
} from "shared/types";
import { IFormSchema } from "../types";

const fieldCantBeEmpty = "Поле не може бути пустим";

const dateSchema = yup
  .date()
  .required(fieldCantBeEmpty)
  .min("1900-01-01", "Некорректне значення, має бути 1900-01-01 або пізніше")
  .max(
    new Date(),
    "Некорректне значення, можливо вказати лише минулу дату"
  ) as unknown as RequiredStringSchema<string>;

const schema: yup.SchemaOf<IPatientData> = yup.object({
  lastName: yup.string().required(fieldCantBeEmpty),
  firstName: yup.string().required(fieldCantBeEmpty),
  patronymic: yup
    .string()
    .when("$hasPatronymic", ([hasPatronymic], schema) =>
      hasPatronymic ? schema.required(fieldCantBeEmpty) : schema
    ),
  VATNumber: yup
    .string()
    .when("$hasVATNumber", ([hasVATNumber], schema) =>
      hasVATNumber ? schema.required(fieldCantBeEmpty) : schema
    ),
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

  phoneNumber: yup
    .string()
    .matches(
      RegExp("\\+38\\(0\\d{2}\\)\\d{3}-\\d{2}-\\d{2}"),
      "Некорректний номер телефона. Приклад +38(066)999-88-77"
    )
    .when("desiredCommunicationWay", {
      is: DesiredCommunication.ByPhone,
      then: (schema) => schema.required(fieldCantBeEmpty),
    }),
  emailAddress: yup
    .string()
    .email("Некорректна електронна адреса. Приклад john.doe@ukr.net")
    .when("desiredCommunicationWay", {
      is: DesiredCommunication.ByEmail,
      then: (schema) => schema.required(fieldCantBeEmpty),
    }),

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

  documentSeries: yup
    .string()
    .required(fieldCantBeEmpty)
    .when("documentType", ([documentType], schema) => {
      switch (documentType) {
        case DocumentType.PaperPassport:
          return schema.matches(
            RegExp("[А-ЯҐЄІЇ]{2}\\d{6}"),
            "Невірний формат, серія паспорту книжечки має містити 2 киріллічні букви та 6 цифр."
          );
        case DocumentType.IDPassport:
          return schema.matches(
            RegExp("\\d{13}"),
            "Невірний формат, номер ID картки має містити 13 цифр."
          );
        default:
          return schema.matches(
            RegExp("[А-ЯҐЄІЇ]{3}\\d{5,9}"),
            "Невірний формат, номер документу має складатись з 3 кирілічних букв та 5-9 цифр."
          );
      }
    }),

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
      RegExp("\\d{8}-\\d{5}"),
      "Некорректний номер, приклад 19900101-12345"
    ),
});

export const validate = async (
  values: IFormSchema,
  context: { hasPatronymic: boolean; hasVATNumber: boolean }
) => {
  console.log("inner validation called with", values);

  try {
    await schema.validate(values, { abortEarly: false, context });
  } catch (e: unknown) {
    console.log(e);

    // TODO stack errors
    return {};
  }
};
