import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CreatePatientModal from "components/CreatePatientModal";
import PatientData from "components/PatientData";

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
  };

  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Button variant="contained" onClick={onCreatePatient}>
        Create patient
      </Button>

      {modalOpen ? <CreatePatientModal onSavePatient={onSavePatient} /> : null}

      {patientData ? <PatientData data={patientData} /> : null}
    </Box>
  );
}

export default App;
