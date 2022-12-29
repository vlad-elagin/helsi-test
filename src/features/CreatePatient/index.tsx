import React from "react";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { IPatientData } from "shared/types";
import { DocumentDataForm, PatientDataForm } from "./components";

interface ICreatePatientProps {
  onSavePatient: (data: string) => void;
}

export const CreatePatient: React.FC<ICreatePatientProps> = ({
  onSavePatient,
}) => {
  const onSubmit = (values: IPatientData) => {
    onSavePatient(JSON.stringify(values));
  };

  return (
    <Form<IPatientData> onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <PatientDataForm />

          <DocumentDataForm />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button>Скасувати</Button>
            <Button variant="contained" type="submit">
              Створити
            </Button>
          </Box>
        </form>
      )}
    </Form>
  );
};
