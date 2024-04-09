import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
const seriesData = [20, 40, 45, 30, 50];
const seriesLabels = {
  visible: true,
  // Note that visible defaults to false
  padding: 3,
  font: "bold 16px Arial, sans-serif",
};
const ChartContainer = () => {
  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem type="line" data={seriesData} labels={seriesLabels} />
      </ChartSeries>
    </Chart>
  );
};

export default ChartContainer;
