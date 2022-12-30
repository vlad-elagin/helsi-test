import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Field } from "react-final-form";

import { Input, FormSection } from "shared/ui";
import {
  desiredCommunicationWayOptions,
  genderOptions,
  phoneNumberMask,
  parseInputValue,
} from "../utils";

type SwitchToggler = (val: boolean) => void;

interface IPatientDataFormProps {
  hasPatronymic: boolean;
  setHasPatronymic: SwitchToggler;
  hasVATNumber: boolean;
  setHasVATNumber: SwitchToggler;
}

export const PatientDataForm: React.FC<IPatientDataFormProps> = ({
  hasPatronymic,
  hasVATNumber,
  setHasPatronymic,
  setHasVATNumber,
}) => {
  const onSwitchToggle = (func: SwitchToggler) => {
    return (val: boolean) => func(val);
  };

  return (
    <FormSection label="Дані пацієнта">
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4}>
          <Field name="lastName">
            {(props) => (
              <Input
                label="Прізвище*"
                shrinkLabel
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Field name="firstName">
            {(props) => (
              <Input
                label="Імʼя*"
                shrinkLabel
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Field name="patronymic">
            {(props) => (
              <Input
                label="По батькові*"
                shrinkLabel
                switchValue={hasPatronymic}
                onSwitchToggle={onSwitchToggle(setHasPatronymic)}
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Field name="VATNumber">
            {(props) => (
              <Input
                label="РНОКПП (ІПН)*"
                shrinkLabel
                switchValue={hasVATNumber}
                onSwitchToggle={onSwitchToggle(setHasVATNumber)}
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Field name="birthDate">
            {(props) => (
              <Input
                label="Дата народження*"
                type="date"
                inputProps={{
                  min: "1900-01-01",
                  max: new Date().toISOString().split("T")[0],
                }}
                shrinkLabel
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Field name="gender">
            {(props) => (
              <Input
                label="Стать*"
                shrinkLabel
                select
                selectOptions={genderOptions}
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="birthCountry">
            {(props) => (
              <Input
                label="Країна народження*"
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="birthPlace">
            {(props) => (
              <Input
                label="Місце народження"
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="desiredCommunicationWay">
            {(props) => (
              <Input
                label="Бажаний спосіб звʼязку з пацієнтом*"
                select
                shrinkLabel
                selectOptions={desiredCommunicationWayOptions}
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="secretWord">
            {(props) => (
              <Input
                label="Секретне слово (не менше 6 символів)*"
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field
            name="phoneNumber"
            parse={parseInputValue(phoneNumberMask, 17)}
          >
            {(props) => (
              <Input
                label="Контактний номер телефону"
                shrinkLabel
                placeholder="+38(___)___-__-__"
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
        <Grid xs={12} md={6}>
          <Field name="emailAddress">
            {(props) => (
              <Input
                label="Адреса електронної пошти"
                shrinkLabel
                placeholder="example@example.com"
                {...props.input}
                meta={props.meta}
              />
            )}
          </Field>
        </Grid>
      </Grid>
    </FormSection>
  );
};
