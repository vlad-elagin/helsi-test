import { DesiredCommunication, DocumentType, Gender } from "shared/types";

export type IPatientDataSchema = {
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

export type IDocumentDataSchema = {
  documentType: DocumentType;
  documentSeries: string;
  documentIssueDate: string;
  documentExpireDate: string;
  documentOrigin: string;
  documentNumber: string;
};

export type IFormSchema = IPatientDataSchema & IDocumentDataSchema;
