import React from "react";

import BaseModal, { ModalProps } from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { modalStyles, modalHeaderStyles, modalBodyStyles } from "./styles";

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  ...modalProps
}) => {
  return (
    <BaseModal {...modalProps}>
      <Box sx={modalStyles}>
        <Box sx={modalHeaderStyles}>
          <ArrowBackIcon sx={{ marginRight: 1 }} />
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={modalBodyStyles}>{children}</Box>
      </Box>
    </BaseModal>
  );
};
