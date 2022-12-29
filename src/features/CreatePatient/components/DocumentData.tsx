import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Field } from "react-final-form";

import { Input, FormSection } from "shared/ui";
import {
  documentNumberMask,
  parseInputValue,
  documentTypeOptions,
} from "../utils";

export const DocumentDataForm: React.FC = () => {
  return (
    <FormSection label=" Документ, що посвідчує особу">
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Field name="documentType">
            {(props) => (
              <Input
                label="Тип документу*"
                select
                shrinkLabel
                selectOptions={documentTypeOptions}
                {...props.input}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="documentSeries">
            {(props) => (
              <Input label="Серія (за наявності), номер" {...props.input} />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="documentIssueDate">
            {(props) => (
              <Input
                label="Коли видано*"
                type="date"
                shrinkLabel
                {...props.input}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="documentExpireDate">
            {(props) => (
              <Input label="Діє до" type="date" shrinkLabel {...props.input} />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="documentOrigin">
            {(props) => (
              <Input label="Ким видано*" shrinkLabel {...props.input} />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field
            name="documentNumber"
            parse={parseInputValue(documentNumberMask, 14)}
          >
            {(props) => (
              <Input
                label="Запис № (УНЗР)"
                shrinkLabel
                placeholder="РРРРММДД-ХХХХХ"
                {...props.input}
              />
            )}
          </Field>
        </Grid>
      </Grid>
    </FormSection>
  );
};
