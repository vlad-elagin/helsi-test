import { SxProps } from "@mui/system";

export const modalStyles: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  fontFamily: "Roboto",
};
export const modalHeaderStyles: SxProps = {
  p: 2,
  bgcolor: "info.main",
  fontSize: "24px",
  color: "background.paper",
  display: "flex",
  alignItems: "center",
};
export const modalBodyStyles: SxProps = {
  p: 2,
};
