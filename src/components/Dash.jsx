import CardC from "./Card";
import ScatterChart from "./ScatterChart";
import AreaChart from "./AreaChart";
import ProgressBarComponent from "./ProgressBarComponent";
import Table from "./Table";
import DonutChartC from "./DonutChart";
import { CardDataBarsFlex } from "./CardDataBarsFlex";

//MUI Components
import SimpleBadge from "./MUI/BadgeC";
import BasicTable from "./MUI/TableC";
import BasicBars from "./MUI/ChartsC";
import BasicLineChart from "./MUI/ChartLinesC";

//Chart.js
import SolarPlantMonitor from "./solarTest/SolarPlantMonitor";

//Kendo
import KendoDash from "./kendo/Kendo";
import AppKendo from "./kendo/KendoGrid01";
import AppKendoExcel from "./kendo/KendoGrid02";
//Custom
import WD from "./custom/WindMill";
import WD2 from "./custom/WindMill2";

//Weather openweathermap
import CurrentWeather from "./weather/CurrentWeather";

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

let textChar01 = "Total";

export const App = ({ drawerWidth = 240 }) => {
  return (
    <main className="p-12">
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Tremor 1</Tab>
          <Tab>Tremor 2</Tab>
          <Tab>Tremor 3</Tab>
          <Tab>MUI 1</Tab>
          <Tab>SolarTest</Tab>
          <Tab>Kendo</Tab>
          <Tab>Kendo GRID</Tab>
          <Tab>Wind</Tab>
          <Tab>Weather</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                <CardC textChar01={textChar01} />
                <CardC textChar01={textChar01} />
              </Card>
              <Card>
                <DonutChartC />
              </Card>
              <Card>
                <ProgressBarComponent />
                <div className="h-28" />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <ScatterChart />
              </Card>
            </div>
            <div className="mt-6">
              <Card>
                <AreaChart />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Table />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <CardDataBarsFlex />
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card>
                  <BasicBars />
                </Card>
                <Card>
                  <BasicLineChart />
                </Card>
              </Grid>
              <div className="mt-6">
                <Card>
                  <BasicTable />
                </Card>
              </div>
              <div className="mt-6">
                <Card>
                  <SimpleBadge />
                </Card>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <SolarPlantMonitor />
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <KendoDash />
            </div>
          </TabPanel>
          <TabPanel>
            <Grid numItems={1} numItemsSm={1} numItemsLg={1} className="gap-2">
              <Card>
                <AppKendoExcel />
              </Card>
              <Card>
                <AppKendo />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  <WD newSpeed={"slow"} torre={"1"} />
                </Card>
                <Card>
                  <WD newSpeed={"medium"} torre={"2"} />
                </Card>
                <Card>
                  <WD newSpeed={"fast"} torre={"3"} />
                </Card>
              </Grid>
              <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  <WD2 newSpeed={"slow"} torre={"1"} />
                </Card>
                <Card>
                  <WD2 newSpeed={"medium"} torre={"2"} />
                </Card>
                <Card>
                  <WD2 newSpeed={"fast"} torre={"3"} />
                </Card>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
              <Col>
                <Card>
                  <CurrentWeather lat={"41.30605"} lon={"2.00123"} />
                </Card>
              </Col>
              <Card>
                <CurrentWeather lat={"61.92411"} lon={"25.748151"} />
              </Card>
              <Card>
                <CurrentWeather lat={"35.05247"} lon={"-118.17396"} />
              </Card>
              <Card>
                <CurrentWeather lat={"-77.846"} lon={"166.676"} />
              </Card>
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};

/* <CurrentWeather lat={"64.72409"} lon={"-18.72934"} />*/
