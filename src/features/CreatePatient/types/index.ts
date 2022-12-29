import { IPatientData } from "shared/types";

export type IFormSchema = Omit<
  IPatientData,
  "gender" | "desiredCommunicationWay" | "documentType"
> & {
  gender: IPatientData["gender"] | "";
  desiredCommunicationWay: IPatientData["desiredCommunicationWay"] | "";
  documentType: IPatientData["documentType"] | "";
};
