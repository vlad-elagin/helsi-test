import React from "react";

import Modal, { ModalProps } from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";

import {
  modalStyles,
  modalHeaderStyles,
  modalBodyStyles,
  modalFooterStyles,
} from "./styles";
import Input from "components/Input";
import { Gender, DesiredCommunication, DocumentType } from "./types";

interface ICreatePatientModalProps extends Omit<ModalProps, "children"> {
  onSavePatient: (data: string) => void;
}

const CreatePatientModal: React.FC<ICreatePatientModalProps> = ({
  onSavePatient,
  ...modalProps
}) => {
  return (
    <Modal {...modalProps}>
      <Box sx={modalStyles}>
        <Box sx={modalHeaderStyles}>
          <ArrowBackIcon sx={{ marginRight: 1 }} />
          <Typography variant="h4">Створення персони</Typography>
        </Box>
        <Box sx={modalBodyStyles}>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "normal", marginBottom: 1 }}
            >
              Дані пацієнта
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid xs={12} md={6} lg={4}>
                <Input label="Прізвище*" InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <Input label="Імʼя*" InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <Input
                  label="По батькові*"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Switch size="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <Input
                  label="РНОКПП (ІПН)*"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Switch size="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <Input
                  label="Дата народження*"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <Input
                  label="Стать*"
                  InputLabelProps={{ shrink: true }}
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option disabled selected>
                    - Вибрати -
                  </option>
                  <option value={Gender.Male}>Чоловіча</option>
                  <option value={Gender.Female}>Жіноча</option>
                </Input>
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
                  SelectProps={{
                    native: true,
                  }}
                  InputLabelProps={{ shrink: true }}
                >
                  <option disabled selected>
                    - Вибрати -
                  </option>
                  <option value={DesiredCommunication.ByEmail}>
                    Електронною поштою
                  </option>
                  <option value={DesiredCommunication.ByPhone}>
                    Телефоном
                  </option>
                </Input>
              </Grid>
              <Grid xs={12} md={6}>
                <Input label="Секретне слово (не менше 6 символів)*" />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  label="Контактний номер телефону"
                  InputLabelProps={{ shrink: true }}
                  placeholder="+38(___)___-__-__"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  label="Адреса електронної пошти"
                  InputLabelProps={{ shrink: true }}
                  placeholder="example@example.com"
                />
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "normal", marginBottom: 1 }}
            >
              Документ, що посвідчує особу
            </Typography>

            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <Input
                  label="Тип документу*"
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option disabled selected>
                    - Вибрати -
                  </option>
                  <option value={DocumentType.AdditionalProtectionPerson}>
                    Посвідчення особи, яка потребує додаткового захисту
                  </option>
                  <option value={DocumentType.IDPassport}>
                    Паспорт (ID-картка)
                  </option>
                  <option value={DocumentType.PaperPassport}>
                    Паспорт (книжечка)
                  </option>
                  <option value={DocumentType.PermanentResidencyUkraine}>
                    Посвідка на постійне проживання в Україні
                  </option>
                  <option value={DocumentType.Refugee}>Посвідка біженця</option>
                  <option value={DocumentType.PermanentResidency}>
                    Посвідка на проживання
                  </option>
                  <option value={DocumentType.TemporaryResidencyUkraine}>
                    Тимчасове посвідчення громадянина України
                  </option>
                </Input>
              </Grid>
              <Grid xs={12} md={6}>
                <Input label="Серія (за наявності), номер" />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  label="Коли видано*"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  label="Діє до"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input label="Ким видано*" InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  label="Запис № (УНЗР)"
                  InputLabelProps={{ shrink: true }}
                  placeholder="РРРРММДД-ХХХХХ"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box sx={modalFooterStyles}>
          <Button>Скасувати</Button>
          <Button variant="contained">Створити</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreatePatientModal;
