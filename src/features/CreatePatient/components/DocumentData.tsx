import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { Input, FormSection } from "shared/ui";
import { DocumentType } from "shared/types";

export const DocumentDataForm: React.FC = () => {
  return (
    <FormSection label=" Документ, що посвідчує особу">
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Input
            label="Тип документу*"
            select
            shrinkLabel
            selectOptions={[
              {
                label: "Посвідчення особи, яка потребує додаткового захисту",
                value: DocumentType.AdditionalProtectionPerson,
              },
              {
                label: "Паспорт (ID-картка)",
                value: DocumentType.IDPassport,
              },
              {
                label: "Паспорт (книжечка)",
                value: DocumentType.PaperPassport,
              },
              {
                label: "Посвідка на постійне проживання в Україні",
                value: DocumentType.PermanentResidencyUkraine,
              },
              {
                label: "Посвідка на проживання",
                value: DocumentType.PermanentResidency,
              },
              {
                label: "Посвідка біженця",
                value: DocumentType.Refugee,
              },
              {
                label: "Тимчасове посвідчення громадянина України",
                value: DocumentType.TemporaryResidencyUkraine,
              },
            ]}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Серія (за наявності), номер" />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Коли видано*" type="date" shrinkLabel />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Діє до" type="date" shrinkLabel />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Ким видано*" shrinkLabel />
        </Grid>
        <Grid xs={12} md={6}>
          <Input
            label="Запис № (УНЗР)"
            shrinkLabel
            placeholder="РРРРММДД-ХХХХХ"
          />
        </Grid>
      </Grid>
    </FormSection>
  );
};
