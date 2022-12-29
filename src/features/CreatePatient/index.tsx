import React from "react";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { DocumentDataForm, PatientDataForm } from "./components";
import { IFormSchema } from "./types";
import { defaultFormState } from "./utils";

interface ICreatePatientProps {
  onSavePatient: (data: string) => void;
}

export const CreatePatient: React.FC<ICreatePatientProps> = ({
  onSavePatient,
}) => {
  const onSubmit = (values: IFormSchema) => {
    console.log(values);

    onSavePatient(JSON.stringify(values));
  };

  return (
    <Form<IFormSchema> onSubmit={onSubmit} initialValues={defaultFormState}>
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
