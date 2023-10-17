import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SolarPlantCard = ({ name, location, status }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Ubicación: {location}
          </Typography>
          <Typography color="text.secondary">
            Estado: {status ? "Operativo" : "Fuera de servicio"}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SolarPlantCard;
