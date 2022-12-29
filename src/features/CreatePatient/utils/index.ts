import { DesiredCommunication, DocumentType, Gender } from "shared/types";
import { IFormSchema } from "../types";

export const genderOptions = [
  { label: "Чоловіча", value: Gender.Male },
  { label: "Жіноча", value: Gender.Female },
];

export const desiredCommunicationWayOptions = [
  {
    label: "Електронною поштою",
    value: DesiredCommunication.ByEmail,
  },
  {
    label: "Телефоном",
    value: DesiredCommunication.ByPhone,
  },
];

export const documentTypeOptions = [
  {
    label: "Посвідчення особи, яка потребує додаткового захисту",
    value: DocumentType.AdditionalProtectionPerson,
  },
  {
    label: "Паспорт (ID-картка)",
    value: DocumentType.IDPassport,
  },
  {
    label: "Паспорт (книжечка)",
    value: DocumentType.PaperPassport,
  },
  {
    label: "Посвідка на постійне проживання в Україні",
    value: DocumentType.PermanentResidencyUkraine,
  },
  {
    label: "Посвідка на проживання",
    value: DocumentType.PermanentResidency,
  },
  {
    label: "Посвідка біженця",
    value: DocumentType.Refugee,
  },
  {
    label: "Тимчасове посвідчення громадянина України",
    value: DocumentType.TemporaryResidencyUkraine,
  },
];

export const defaultFormState: Partial<IFormSchema> = {
  gender: "",
  desiredCommunicationWay: "",
  documentType: "",
};
