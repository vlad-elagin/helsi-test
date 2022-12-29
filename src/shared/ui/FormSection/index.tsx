import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IFormSectionProps {
  label: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<IFormSectionProps> = ({
  label,
  children,
}) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "normal", marginBottom: 1 }}>
        {label}
      </Typography>

      {children}
    </Box>
  );
};
