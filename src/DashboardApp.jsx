import TableApp from "./components/Table";
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

import "./styles.css";

//import { BL } from "./components/BarList";

function App() {
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
              <Card>
                <Text>Title</Text>
                <Metric>KPI 1</Metric>
              </Card>
              <Card>
                <Text>Title</Text>
                <Metric>KPI 2</Metric>
              </Card>
              <Card>
                <Text>Title</Text>
                <Metric>KPI 3</Metric>
              </Card>
              <Col numColSpan={1} numColSpanLg={2}>
                <Card></Card>
              </Col>
              <Card></Card>
              <Col numColSpan={3}>
                <Card>
                  <TableApp />
                </Card>
              </Col>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Col numColSpan={3}>
              <Card>
                <TableApp />
              </Card>
            </Col>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}

export default App;
