import React from "react";

import Modal, { ModalProps } from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import Switch from "@mui/material/Switch";

import { modalStyles, modalHeaderStyles, modalBodyStyles } from "./styles";
import Input from "components/Input";

interface ICreatePatientModalProps extends Omit<ModalProps, "children"> {
  onSavePatient: (data: string) => void;
}

enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}

enum DesiredCommunication {
  ByPhone = "BY_PHONE",
  ByEmail = "BY_EMAIL",
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
                <Input label="Секретне слово (не менше 6 символів)" />
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
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreatePatientModal;
