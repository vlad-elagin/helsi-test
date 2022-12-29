import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { Input, FormSection } from "shared/ui";
import { Gender, DesiredCommunication } from "shared/types";

export const PatientDataForm: React.FC = () => {
  const onSwitchToggle = () => {};

  return (
    <FormSection label="Дані пацієнта">
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4}>
          <Input label="Прізвище*" shrinkLabel />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Input label="Імʼя*" shrinkLabel />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Input
            label="По батькові*"
            shrinkLabel
            onSwitchToggle={onSwitchToggle}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Input
            label="РНОКПП (ІПН)*"
            shrinkLabel
            onSwitchToggle={onSwitchToggle}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Input label="Дата народження*" type="date" shrinkLabel />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Input
            label="Стать*"
            shrinkLabel
            select
            selectOptions={[
              { label: "Чоловіча", value: Gender.Male },
              { label: "Жіноча", value: Gender.Female },
            ]}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Країна народження*" />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Місце народження" />
        </Grid>
        <Grid xs={12} md={6}>
          <Input
            label="Бажаний спосіб звʼязку з пацієнтом*"
            select
            shrinkLabel
            selectOptions={[
              {
                label: "Електронною поштою",
                value: DesiredCommunication.ByEmail,
              },
              {
                label: "Телефоном",
                value: DesiredCommunication.ByPhone,
              },
            ]}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Input label="Секретне слово (не менше 6 символів)*" />
        </Grid>
        <Grid xs={12} md={6}>
          <Input
            label="Контактний номер телефону"
            shrinkLabel
            placeholder="+38(___)___-__-__"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Input
            label="Адреса електронної пошти"
            shrinkLabel
            placeholder="example@example.com"
          />
        </Grid>
      </Grid>
    </FormSection>
  );
};
