import PropTypes from "prop-types";
import React from "react";

import {
  Card,
  Text,
  Title,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const ConfigWidgetTable = ({ data }) => (
  <Card>
    <Title>Cards almacenados</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Texto</TableHeaderCell>
          <TableHeaderCell>Activo</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>
              <Text>{item.text}</Text>
            </TableCell>
            <TableCell>
              <Badge color={item.enabled ? "emerald" : "rose"}>
                {item.enabled ? "true" : "false"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

ConfigWidgetTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default React.memo(ConfigWidgetTable);
