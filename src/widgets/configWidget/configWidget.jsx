import { useState } from "react";

import {
  Grid,
  Card,
  Text,
  Title,
  TabGroup,
  TabPanel,
  TabList,
  Tab,
  TabPanels,
  Button,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput,
} from "@tremor/react";

import { Switch } from "@tremor/react";

import CardWidget from "../card/Card";
import ConfigWidgetTable from "./ConfigWidgetTable";

import { useForm } from "../../hooks";

const dataIni = [
  {
    id: 1,
    text: "widget 01",
    enabled: true,
  },
  {
    id: 2,
    text: "widget 02",
    enabled: false,
  },
  {
    id: 3,
    text: "widget 03",
    enabled: true,
  },
];

const formData = {
  id: 0,
  text: "Nuevo widget",
  enabled: false,
};

function generateId() {
  const idLength = 10;
  const characters = "0123456789";
  let id = "";

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

export const ConfigWidget = ({ drawerWidth = 240 }) => {
  const [data, setData] = useState(dataIni);

  const { id, text, enabled, onInputChange, onResetForm } = useForm(formData);

  const handleSwitchChange = (value) => {
    onInputChange({
      target: {
        name: "enabled",
        value: value,
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let newID;
    if (id == 0) {
      newID = generateId();
    }
    setData([...data, { id: newID, text: text, enabled: enabled }]);

    onResetForm();
  };

  return (
    <main className="p-12">
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Card</Tab>
          <Tab>DonutChart</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
              <Card>
                <Title>Diseño</Title>
                <form onSubmit={onSubmit}>
                  <div className="form-group mb-2">
                    <label htmlFor="switch" className="text-sm text-gray-500">
                      ID
                    </label>
                    <Text>Identificador interno</Text>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="switch" className="text-sm text-gray-500">
                      Texto
                    </label>
                    <TextInput
                      name="text"
                      value={text}
                      onChange={onInputChange}
                      placeholder="Texto a mostrar"
                    />
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <label htmlFor="switch" className="text-sm text-gray-500">
                      Activado
                    </label>
                    <Switch
                      name="enabled"
                      type="checkbox"
                      checked={enabled}
                      onChange={(value) => handleSwitchChange(value)}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <div className="d-grid gap-3">
                      <Button onClick={onSubmit} size="lg">
                        Guardar
                      </Button>
                    </div>
                  </div>
                </form>
              </Card>
              <Card>
                <Title>Previsualización</Title> <br />
                <Card>
                  <CardWidget textChar01={text} />
                </Card>
              </Card>
            </Grid>
            <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
              <ConfigWidgetTable data={data} />
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card></Card>
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};
