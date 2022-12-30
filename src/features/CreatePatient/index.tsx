import React from "react";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { DocumentDataForm, PatientDataForm } from "./components";
import { IFormSchema } from "./types";
import { initialValues } from "./utils";
import { validate } from "./utils/schema";

interface ICreatePatientProps {
  onSavePatient: (data: string) => void;
}

export const CreatePatient: React.FC<ICreatePatientProps> = ({
  onSavePatient,
}) => {
  const onSubmit = (values: IFormSchema) => {
    console.log("submitting!");
    console.log(values);

    onSavePatient(JSON.stringify(values));
  };

  const [hasPatronymic, setHasPatronymic] = React.useState(true);
  const [hasVATNumber, setHasVATNumber] = React.useState(true);

  return (
    <Form<IFormSchema>
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={(values) => {
        console.log("outer validation called");

        return validate(values, {
          hasPatronymic,
          hasVATNumber,
        });
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <PatientDataForm
            hasPatronymic={hasPatronymic}
            setHasPatronymic={setHasPatronymic}
            hasVATNumber={hasVATNumber}
            setHasVATNumber={setHasVATNumber}
          />

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
