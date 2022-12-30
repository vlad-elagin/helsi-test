import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CreatePatient } from "features/CreatePatient";
import { PatientData } from "features/DisplayPatient";
import { Modal } from "shared/ui";

function App() {
  // root-level component ideally shouldn't contain such kind of logic in my opinion
  // but in this case it's ok since the app is small
  const [modalOpen, setModalOpen] = React.useState(false);
  const [patientData, setPatientData] = React.useState<string | null>(null);

  const onCreatePatient = () => {
    setModalOpen(true);
  };

  const onSavePatient = (data: string) => {
    setPatientData(data);
    setModalOpen(false);
  };

  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Roboto",
      }}
    >
      <Button
        variant="contained"
        onClick={onCreatePatient}
        sx={{ marginBottom: 3 }}
      >
        Create patient
      </Button>

      {modalOpen ? (
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Створення персони"
        >
          <CreatePatient
            onSavePatient={onSavePatient}
            onClose={() => setModalOpen(false)}
          />
        </Modal>
      ) : null}

      {patientData ? <PatientData data={patientData} /> : null}
    </Box>
  );
}

export default App;
