import * as yup from "yup";

yup.addMethod(yup.string, "phoneNumber", function () {
  return this.matches(RegExp("\\+38\\(0\\d{2}\\)\\d{3}-\\d{2}-\\d{2}"), {
    message: "Некорректний номер телефона. Приклад +38(066)999-88-77",
    excludeEmptyString: true,
  });
});
