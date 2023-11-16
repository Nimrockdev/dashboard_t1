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

//Custom
import WD from "./custom/WindMill";
import WD2 from "./custom/WindMill2";

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
          <Tab>Wind</Tab>
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
        </TabPanels>
      </TabGroup>
    </main>
  );
};
