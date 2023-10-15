import { ChartAPI } from '../lib/api'
import ChartCardList from '../components/ChartCardList';
import Page from '../components/Page';
import Overlay from '../components/Overlay';
import { useState } from 'react';
import PageNewChart from './PageNewChart';

const api = new ChartAPI();

type PageMainState = 'listing' | 'new chart';

export default function PageMain() {
  const charts = api.queryCharts(); // TODO: Temporarily not an async function and there's no loading indicator on startup yet.

  const [state, setState] = useState('listing' as PageMainState);

  function openNewChart() {
    setState('new chart');
  }

  function onNewChartClose() {
    setState('listing');
  }

  return <Page>
    <div>
      <button className="p-1 bg-gray-300 rounded shadow" onClick={openNewChart}>+ Chart</button>
    </div>
    <ChartCardList charts={charts} />
    {(state == 'new chart') && <Overlay>
      <PageNewChart onClose={onNewChartClose}/>
    </Overlay>}
  </Page>;
}
