import { Card, Metric } from "@tremor/react";

//export default () => <Card>Aqui va el card</Card>;

function CardWidget({ textChar01 }) {
  return (
    <>
      <Card>
        <h2>{textChar01}</h2>
        <Metric>{Math.floor(Math.random() * 100000)}</Metric>
      </Card>
    </>
  );
}

export default CardWidget;
