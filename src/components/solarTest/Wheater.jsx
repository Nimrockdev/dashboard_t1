import React from "react";
import { Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Icono de sol para tiempo soleado
import CloudIcon from "@mui/icons-material/Cloud"; // Icono de nube para tiempo nublado

const Weather = ({ weather }) => {
  const isSunny = weather.toLowerCase().includes("soleado");
  const icon = isSunny ? <WbSunnyIcon /> : <CloudIcon />;
  const color = isSunny ? "orange" : "gray";

  return (
    <div style={{ textAlign: "center" }}>
      {icon}
      <Typography variant="h6" style={{ color }}>
        {weather}
      </Typography>
    </div>
  );
};

export default Weather;
