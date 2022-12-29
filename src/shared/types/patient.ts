export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}
export enum DesiredCommunication {
  ByPhone = "BY_PHONE",
  ByEmail = "BY_EMAIL",
}
export enum DocumentType {
  AdditionalProtectionPerson = "ADDITIONAL_PROTECTION_PERSON",
  IDPassport = "ID_PASSPORT",
  PaperPassport = "PAPER_PASSPORT",
  PermanentResidencyUkraine = "PERMANENT_RESIDENCY_UKRAINE",
  Refugee = "REFUGEE",
  PermanentResidency = "PERMANENT_RESIDENCY",
  TemporaryResidencyUkraine = "TEMPORARY_RESIDENCY_UKRAINE",
}

export type IPatientPersonalData = {
  lastName: string;
  firstName: string;
  patronymic: string;
  VATNumber: string;
  birthDate: string;
  gender: Gender;
  birthCountry: string;
  birthPlace: string;
  desiredCommunicationWay: DesiredCommunication;
  secretWord: string;
  phoneNumber: string;
  emailAddress: string;
};

export type IPatientDocumentData = {
  documentType: DocumentType;
  documentSeries: string;
  documentIssueDate: string;
  documentExpireDate: string;
  documentOrigin: string;
  documentNumber: string;
};

export type IPatientData = IPatientPersonalData & IPatientDocumentData;
