import { PropsWithChildren } from "react";
import { Header } from "../components/Header";
import Page from "../components/Page";
import Form from "../components/forms/Form";

export default function PageNewChart(props: PropsWithChildren & { onClose: () => void }) {
  return <Page>
    <Header closable={true} onClose={props.onClose} />
    <Form definitions={[
      {
        kind: 'input',
        label: 'Name',
      },
      {
        kind: 'input',
        label: 'code',
      },
    ]} />
  </Page>;
}
