import { ChartLoaded } from "../lib/types";

export default function Chart(props: {chart: ChartLoaded}) {
  return <div>
    <div className="block">ID: {props.chart.chartId}</div>
    <div className="block">Code: {props.chart.code}</div>
    <div className="block">Last: {'' + props.chart.lastNote}</div>
  </div>;
}
