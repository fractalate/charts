import React, { Component } from "react";

type FormFieldInput = {
  kind: 'input';
  label: string;
};
type FormFieldDate = {
  kind: 'date';
  label: string;
};

type FormField = FormFieldInput | FormFieldDate;
type FormDefinitions = FormField[];

function FormComponentInput(props: { definition: FormFieldInput }) {
  return <div className="block">
    <label>{props.definition.label}</label>
    <input type="text"></input>
  </div>
}

function FormComponentDate(props: { definition: FormFieldDate }) {
  return <div className="block">
    <label>{props.definition.label}</label>
    <input type="date"></input>
  </div>
}

function FormComponent(props: { definition: FormField }): JSX.Element {
  if (props.definition.kind === 'input') {
    return <FormComponentInput definition={props.definition} />;
  } else if (props.definition.kind === 'date') {
    return <FormComponentDate definition={props.definition} />;
  }
  return props.definition;
}

export default function Form(props: { definitions: FormDefinitions }) {
  // TODO: keys on these items
  const renderedComponents = props.definitions.map((def) => <div>
    <FormComponent definition={def} />
  </div>);
  return <form onSubmit={(e) => e.preventDefault()}>
    {renderedComponents}
  </form>
}
