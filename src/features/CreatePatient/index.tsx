import React from "react";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { DocumentDataForm, PatientDataForm } from "./components";
import { IFormSchema } from "./types";
import { initialValues } from "./utils";
import { IValidationContext, validate } from "./utils/schema";

interface ICreatePatientProps {
  onSavePatient: (data: string) => void;
  onClose: () => void;
}

export const CreatePatient: React.FC<ICreatePatientProps> = ({
  onSavePatient,
  onClose,
}) => {
  const onSubmit = (values: IFormSchema) => {
    onSavePatient(JSON.stringify(values));
  };

  const validationContextRef = React.useRef<IValidationContext>({
    hasPatronymic: true,
    hasVATNumber: true,
  });

  return (
    <Form<IFormSchema>
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={(values) => {
        return validate(values, validationContextRef.current);
      }}
      subscription={{}}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <PatientDataForm validationContext={validationContextRef} />

          <DocumentDataForm />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button sx={{ marginRight: 1 }} onClick={onClose}>
              Скасувати
            </Button>
            <Button variant="contained" type="submit">
              Створити
            </Button>
          </Box>
        </form>
      )}
    </Form>
  );
};
