import { PropsWithChildren } from "react";
import { Header } from "../components/Header";
import Page from "../components/Page";

export default function PageNewChart(props: PropsWithChildren & { onClose: () => void }) {
  return <Page>
    <Header closable={true} onClose={props.onClose} />
  </Page>;
}
