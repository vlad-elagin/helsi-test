import React from "react";
import JSONPretty from "react-json-pretty";

interface IPatientDataProps {
  data: string;
}

export const PatientData: React.FC<IPatientDataProps> = ({ data }) => {
  return <JSONPretty data={data} />;
};
