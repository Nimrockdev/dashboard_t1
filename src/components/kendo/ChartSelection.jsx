import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartPanes,
  ChartPane,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";

let data = [];
let categories = [];
const startYear = 2000;
for (let i = 0; i < 200; i++) {
  categories.push(startYear + i);
  data.push(Math.floor(Math.random() * 200));
}
const defaultStep = Math.floor(categories.length / 10);

const ChartContainer = () => {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(20);
  const [step, setStep] = React.useState({
    step: 0,
  });
  const onSelectEnd = (args) => {
    setMin(args.from);
    setMax(args.to);
    setStep({
      step: Math.floor((args.to - args.from) / 10),
    });
  };
  return (
    <Chart onSelectEnd={onSelectEnd}>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          categories={categories}
          min={min}
          max={max}
          labels={step}
          majorGridLines={step}
          majorTicks={step}
        />
        <ChartCategoryAxisItem
          categories={categories}
          name="navigatorAxis"
          labels={{
            step: defaultStep,
          }}
          majorGridLines={{
            step: defaultStep,
          }}
          majorTicks={{
            step: defaultStep,
          }}
          pane="navigator"
          select={{
            from: min,
            to: max,
          }}
        />
      </ChartCategoryAxis>
      <ChartPanes>
        <ChartPane />
        <ChartPane name={"navigator"} height={100} />
      </ChartPanes>
      <ChartValueAxis>
        <ChartValueAxisItem />
        <ChartValueAxisItem name="valueNavigatorAxis" pane="navigator" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          type="line"
          style="smooth"
          data={data}
          markers={{
            visible: false,
          }}
        />
        <ChartSeriesItem
          type="area"
          style="smooth"
          data={data}
          axis="valueNavigatorAxis"
          categoryAxis="navigatorAxis"
        />
      </ChartSeries>
    </Chart>
  );
};

export default ChartContainer;
