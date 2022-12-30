import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";
import { DesiredCommunication, DocumentType, Gender } from "./types";

/**
 * Strings
 */

yup.addMethod<yup.StringSchema>(yup.string, "phoneNumber", function () {
  return this.matches(RegExp("\\+38\\(0\\d{2}\\)\\d{3}-\\d{2}-\\d{2}"), {
    message: "Некорректний номер телефона. Приклад +38(066)999-88-77",
    excludeEmptyString: true,
  });
});
yup.addMethod<yup.StringSchema>(yup.string, "VATNumber", function () {
  return this.matches(RegExp("\\d{10}"), {
    message: "ІПН має складатися з 10 цифр",
    excludeEmptyString: true,
  });
});
yup.addMethod<yup.StringSchema>(yup.string, "gender", function () {
  return this.oneOf([Gender.Male, Gender.Female], "Некорректна стать");
});
yup.addMethod<yup.StringSchema>(yup.string, "communicationWay", function () {
  return this.oneOf(
    [DesiredCommunication.ByPhone, DesiredCommunication.ByEmail],
    "Некорректний тип звʼязку"
  );
});
yup.addMethod<yup.StringSchema>(yup.string, "document", function () {
  return this.oneOf(
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
  );
});
yup.addMethod<yup.StringSchema>(yup.string, "documentSeries", function () {
  return this.when("documentType", (documentType, schema) => {
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
  });
});
yup.addMethod<yup.StringSchema>(yup.string, "documentNumber", function () {
  return this.matches(RegExp("\\d{8}-\\d{5}"), {
    message: "Некорректний номер, приклад 19900101-12345",
    excludeEmptyString: true,
  });
});

/**
 * Dates
 */
yup.addMethod<yup.DateSchema>(yup.date, "emptyAsUndefined", function () {
  return this.transform((curr, orig) => (orig === "" ? undefined : curr));
});
yup.addMethod<yup.DateSchema>(yup.date, "notTooOld", function () {
  return this.min(
    "1900-01-01",
    "Некорректне значення, має бути 1900-01-01 або пізніше"
  );
});
yup.addMethod<yup.DateSchema>(yup.date, "onlyPast", function () {
  return this.max(
    new Date(),
    "Некорректне значення, можливо вказати лише минулу дату"
  );
});

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    phoneNumber(): StringSchema<TType, TContext>;
    VATNumber(): StringSchema<TType, TContext>;
    gender(): StringSchema<TType, TContext>;
    communicationWay(): StringSchema<TType, TContext>;
    document(): StringSchema<TType, TContext>;
    documentSeries(): StringSchema<TType, TContext>;
    documentNumber(): StringSchema<TType, TContext>;
  }

  interface DateSchema<
    TType extends Maybe<Date> = Date | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): DateSchema<TType, TContext>;
    notTooOld(): DateSchema<TType, TContext>;
    onlyPast(): DateSchema<TType, TContext>;
  }
}

export default yup;
