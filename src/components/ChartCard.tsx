import { useState } from "react";
import { ChartDescriptor, ChartLoaded } from "../lib/types";
import Overlay from "./Overlay";
import Chart from "./Chart";
import { ChartAPI } from "../lib/api";
import { getUserFriendlyErrorMessage } from "../lib/err";
import Page from "./Page";
import { Header } from "./Header";

const api = new ChartAPI(); // TODO: Temporary local API. Delete eventually.
// TODO: Tag stuff might be better in another module.
function TagList(props: { tags: string[] }) {
  const tags = props.tags.map((tag) => <Tag tag={tag} />);
  return <div className="flex gap-1">{tags}</div>;
}
function Tag(props: { tag: string }) {
  return <div className="flex-none">
    <div className="p-1 bg-gray-100 rounded">
      {/* block is used here to get the span to be display:block instead of display:inline and conceptually it takes up a whole "row" in the parent div, which is all the content so the div appropriately shrinks around the span. TODO IDK why I have to do that in this setup and I should research it. */}
      <span className="block text-[0.75em] italic font-bold text-gray-750">{props.tag}</span>
    </div>
  </div>;
}

// ErrorContext
//
// Helper component for presenting a more detailed error message based on what action the error
// occurred during (the context).

type ErrorMessageContext = 'opening';

function ErrorContext(props: { context: ErrorMessageContext }) {
  if (props.context === 'opening') {
    return <>Error while opening chart:</>
  }
}

// TODO: Documentations

// TODO: These can be simplified to be just strings now.
type ChartCardState = { state: 'listing' }
                    | { state: 'opening' }
                    | { state: 'showing', chart: ChartLoaded }
                    | { state: 'error message', context: ErrorMessageContext, message: string }
                    ;

export default function ChartCard(props: { chart: ChartDescriptor }) {
  const [state, setState] = useState({ state: 'listing' } as ChartCardState);

  async function openChart() {
    setState({ state: 'opening' });
    try {
      const chart = await api.loadChart(props.chart.chartId);
      setState({ state: 'showing', chart: chart });
    } catch (err) {
      console.error(err);
      setState({ state: 'error message', context: 'opening', message: getUserFriendlyErrorMessage(err) });
    }
  }

  function closeChart() {
    setState({ state: 'listing' });
  }

  function closeErrorMessage() {
    setState({ state: 'listing' });
  }

  // TODO: I should be able to select text without clicking. Is that possible?
  return <>
    <div className="p-2 rounded border-solid border-2 cursor-pointer" onClick={openChart}>
      <div className="block">{props.chart.code}</div>
      <div className="block"><TagList tags={props.chart.tags} /></div>
      {(state.state === "opening") && <>
        <div className="block">LOADING...</div>
        <Overlay transparent={true} />
      </>}
      {(state.state === "showing") && <Overlay>
        <Page>
          <Header closable={true} onClose={closeChart} />
          <Chart chart={state.chart} />
        </Page>
      </Overlay>}
      {(state.state === "error message") && <Overlay>
        <Page>
          <Header closable={true} onClose={closeErrorMessage} />
          {/* TODO: I don't like using &nbsp; here */}
          <ErrorContext context={state.context} />&nbsp;
          {state.message}
        </Page>
      </Overlay>}
    </div>
  </>;
}
