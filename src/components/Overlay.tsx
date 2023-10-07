import { PropsWithChildren, useEffect } from "react";
import './Overlay.css';
import ReactDOM from "react-dom/client";

const bgColorDefault = 'bg-white';

export function randomId() {
  return 'id' + Math.random().toPrecision(12).slice(2);
}

interface OverlayProps {
  transparent?: boolean;
  busy?: boolean;
}

export default function Overlay(props: PropsWithChildren & OverlayProps) {
  const bgColor = props.transparent ? 'transparent' : bgColorDefault;
  const cursor = props.busy ? 'cursor-wait' : '';
  // See Overlay.css for "overlay" class.
  return <div className={"overlay absolute top-0 right-0 left-0 bottom-0 h-screen w-full " + bgColor + " " + cursor}>
    {props.children}
  </div>;
}

// TODO: I need to really evaluate this for memory leaks.
export function openOverlay(factory: (close: () => void) => any, props?: OverlayProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  function close() {
    // TODO: Does removing the child delete the ReactDOM objects being tracked behind the scenes?
    document.body.removeChild(div);
  }
  const content = factory(close);
  ReactDOM.createRoot(div).render(
    <Overlay {...props}>
      {content}
    </Overlay>
  );
}
