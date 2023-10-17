import React from "react";
import { Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe"; // Icono de brújula para dirección del viento

const Wind = ({ windSpeed, windDirection }) => {
  const color = windSpeed > 3 ? "green" : "gray"; // Cambia el color según la velocidad del viento

  return (
    <div style={{ textAlign: "center" }}>
      <NearMeIcon style={{ color }} />
      <Typography variant="h6" style={{ color }}>
        Viento: {windSpeed} m/s, {windDirection}
      </Typography>
    </div>
  );
};

export default Wind;
