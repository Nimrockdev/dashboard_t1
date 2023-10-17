import SolarPlantCard from "./SolarPlantCard";
import SolarProductionChart from "./SolarProductionChart";
import CurrentProduction from "./CurrentProduction";
import Weather from "./Wheater";
import Temperature from "./Temperature";
import Wind from "./Wind";

import {
  Grid,
  Col,
  Card,
  Text,
  Title,
  Metric,
  TabGroup,
  TabPanel,
  TabList,
  Tab,
  TabPanels,
} from "@tremor/react";

const plantasSolares = [
  {
    id: 1,
    name: "Planta Solar 1",
    location: "Ciudad A",
    status: true,
    productionData: [
      { timestamp: "2023-10-01", production: 500 },
      { timestamp: "2023-10-02", production: 550 },
      // Agrega más datos de producción según sea necesario
    ],
  },
  {
    id: 2,
    name: "Planta Solar 2",
    location: "Ciudad B",
    status: false,
    productionData: [
      { timestamp: "2023-10-01", production: 480 },
      { timestamp: "2023-10-02", production: 0 },
      { timestamp: "2023-10-03", production: 200 },
      { timestamp: "2023-10-04", production: 250 },
      { timestamp: "2023-10-05", production: 300 },
      { timestamp: "2023-10-06", production: 400 },
      { timestamp: "2023-10-07", production: 150 },
      { timestamp: "2023-10-08", production: 100 },
      { timestamp: "2023-10-09", production: 250 },
      { timestamp: "2023-10-10", production: 50 },
      { timestamp: "2023-10-11", production: 250 },

      // Agrega más datos de producción según sea necesario
    ],
  },
  // Puedes agregar más plantas solares según sea necesario
];

const SolarPlantMonitor = () => {
  return (
    <>
      <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
        <Card>
          <CurrentProduction production={1500} />
          <CurrentProduction production={1200} />
          <CurrentProduction production={1500} />
        </Card>
      </Grid>
      <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
        <Card>
          <Card>
            <Weather weather="Soleado" />
          </Card>
          <Card>
            <Temperature temperature={25} />
          </Card>
          <Card>
            <Wind windSpeed={3} windDirection="Norte" />
          </Card>
        </Card>
      </Grid>
      <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
        <Card>
          <h1>Monitorización de Plantas Solares</h1>

          <Card key={plantasSolares[0].id} style={{ marginBottom: "20px" }}>
            <SolarPlantCard
              name={plantasSolares[0].name}
              location={plantasSolares[0].location}
              status={plantasSolares[0].status}
            />
            <br></br>
            <h2>Producción de Energía Solar</h2>
            <SolarProductionChart data={plantasSolares[0].productionData} />
          </Card>

          <Card key={plantasSolares[1].id} style={{ marginBottom: "20px" }}>
            <SolarPlantCard
              name={plantasSolares[1].name}
              location={plantasSolares[1].location}
              status={plantasSolares[1].status}
            />
            <br></br>
            <h2>Producción de Energía Solar</h2>
            <SolarProductionChart data={plantasSolares[1].productionData} />
          </Card>
        </Card>
      </Grid>
    </>
  );
};

export default SolarPlantMonitor;
