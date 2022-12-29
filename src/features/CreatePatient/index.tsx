import React from "react";

import { Form, Field } from "react-final-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@mui/material/Button";

import { Input } from "shared/ui";
import { Gender, DesiredCommunication, DocumentType } from "shared/types";

interface ICreatePatientProps {
  onSavePatient: (data: string) => void;
}

export const CreatePatient: React.FC<ICreatePatientProps> = ({
  onSavePatient,
}) => {
  const onSubmit = () => {};

  const onSwitchToggle = () => {};

  return (
    <Form onSubmit={onSubmit}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "normal", marginBottom: 1 }}>
          Дані пацієнта
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
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
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: "normal", marginBottom: 1 }}>
          Документ, що посвідчує особу
        </Typography>

        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Input
              label="Тип документу*"
              select
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button>Скасувати</Button>
        <Button variant="contained">Створити</Button>
      </Box>
    </Form>
  );
};
