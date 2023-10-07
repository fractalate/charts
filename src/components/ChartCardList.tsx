import { ChartDescriptor } from "../lib/types";
import ChartCard from "./ChartCard";

export default function ChartCardList(props: { charts: ChartDescriptor[] }) {
  const chartCarts = props.charts.map((chart) => <div key={chart.chartId} className="block">
    <ChartCard chart={chart} />
  </div>);
  return <div className="grid gap-1">
    {chartCarts}
  </div>;
}
