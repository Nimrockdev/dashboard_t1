import React from "react";
import { Typography } from "@mui/material";
import Brightness5Icon from "@mui/icons-material/Brightness5"; // Icono del sol para representar producción solar
import Brightness2Icon from "@mui/icons-material/Brightness2"; // Icono de la luna para representar producción no solar

const CurrentProduction = ({ production }) => {
  // Determinar el color y el icono basándose en la producción
  const color = production > 0 ? "green" : "red";
  const icon = production > 0 ? <Brightness5Icon /> : <Brightness2Icon />;
  const msn;
  return (
    <div style={{ textAlign: "center" }}>
      {icon}
      <Typography variant="h4" style={{ color }}>
        {production} kWh
      </Typography>
    </div>
  );
};

export default CurrentProduction;
