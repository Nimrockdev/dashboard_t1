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
                <div className="h-96" />
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
                <Card></Card>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};