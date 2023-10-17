import React from "react";
import { Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Icono de termómetro para temperatura

const Temperature = ({ temperature }) => {
  const color = temperature > 25 ? "red" : "blue"; // Cambia el color según la temperatura

  return (
    <div style={{ textAlign: "center" }}>
      <AcUnitIcon style={{ color }} />
      <Typography variant="h6" style={{ color }}>
        {temperature} °C
      </Typography>
    </div>
  );
};

export default Temperature;
