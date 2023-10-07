import './index.css'
import { ChartAPI } from './lib/api'
import ChartCardList from './components/ChartCardList';
import Page from './components/Page';
import Overlay from './components/Overlay';

const api = new ChartAPI();

function App() {
  const charts = api.queryCharts(); // TODO: Temporarily not an async function and there's no loading indicator on startup yet.
  return <Overlay>
    <Page>
      <ChartCardList charts={charts} />
    </Page>
  </Overlay>
  ;
}

export default App
