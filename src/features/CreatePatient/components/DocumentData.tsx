import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Field, useField } from "react-final-form";

import { Input, FormSection } from "shared/ui";
import {
  documentNumberMask,
  parseInputValue,
  documentTypeOptions,
} from "../utils";

export const DocumentDataForm: React.FC = () => {
  const [formEnabled, setFormEnabled] = React.useState(false);
  const {
    input: { value: documentType },
  } = useField("documentType");

  React.useEffect(() => {
    if (documentType && !formEnabled) {
      setFormEnabled(true);
    }
  }, [documentType, formEnabled]);

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
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field<string>
            name="documentSeries"
            parse={(val) => val.toUpperCase()}
          >
            {(props) => (
              <Input
                label="Серія (за наявності), номер"
                {...props.input}
                meta={props.meta}
                disabled={!formEnabled}
              />
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
                inputProps={{
                  min: "1900-01-01",
                  max: new Date().toISOString().split("T")[0],
                }}
                {...props.input}
                meta={props.meta}
                disabled={!formEnabled}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="documentExpireDate">
            {(props) => (
              <Input
                label="Діє до"
                type="date"
                shrinkLabel
                inputProps={{
                  min: "1900-01-01",
                  max: "2100-01-01",
                }}
                {...props.input}
                meta={props.meta}
                disabled={!formEnabled}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="documentOrigin">
            {(props) => (
              <Input
                label="Ким видано*"
                shrinkLabel
                {...props.input}
                meta={props.meta}
                disabled={!formEnabled}
              />
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
                meta={props.meta}
                disabled={!formEnabled}
              />
            )}
          </Field>
        </Grid>
      </Grid>
    </FormSection>
  );
};
