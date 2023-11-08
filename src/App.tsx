import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { ChartAPI } from './lib/api';
import { ChartLoaded, ChartLoaded1r0, ChartRef, ChartRef1r0 } from './lib/types';

interface ChartListProps {
  charts: ChartRef[];
  onChartClick: (chart: ChartRef) => void;
}

function ChartList({ charts, onChartClick }: ChartListProps) {
  const children = charts.map((chart) => <ChartListItem key={chart.rv} chart={chart} onClick={() => onChartClick(chart)} />)
  return <div className="block">
    {children}
  </div>
}

interface ChartListItemProps {
  chart: ChartRef;
  onClick: () => void;
}

function ChartListItem({ chart, onClick }: ChartListItemProps) {
  return <div className="m-2 bg-gray-200">
    <button onClick={onClick}>{chart.name}</button>
  </div>
}

interface ChartViewProps {
  chart: ChartLoaded1r0;
  onClose: () => void;
}
function ChartView({ chart, onClose }: ChartViewProps) {
  return <div>
    <div className="block"><button onClick={onClose}>X</button></div>
    <div className="block">
      {chart.code} - {chart.name}
    </div>
  </div>
}

export default function App() {
  const api = useMemo(() => new ChartAPI(), []);
  const [errorMessage, setErrorMessage] = useState('');
  const [charts, setCharts] = useState([] as ChartRef[]);
  const [chart, setChart] = useState(null as null | ChartLoaded);

  useEffect(() => {
    api.queryCharts().then((charts) => {
      setCharts(charts);
    }).catch((err) => {
      setErrorMessage(err.message);
      setCharts([]);
    });
  }, [api]);

  const loadChart = (id: string) => {
    api.loadChart(id).then((chart) => {
      setChart(chart);
    }).catch((err) => {
      setErrorMessage(err.message);
    });
  };

  return <>
    {errorMessage != '' && <div className="block bg-red-100 m-4 p-3">{errorMessage}</div>}
    {chart == null && <ChartList charts={charts} onChartClick={(chart) => loadChart(chart.id)}/>}
    {chart != null && <ChartView chart={chart} onClose={() => setChart(null)} />}
  </>
}
