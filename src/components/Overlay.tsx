import { PropsWithChildren, useEffect } from "react";
import './Overlay.css';
import ReactDOM from "react-dom/client";

const bgColorDefault = 'bg-white';

interface OverlayProps {
  transparent?: boolean;
  busy?: boolean;
}

// TODO: I need to really evaluate this for memory leaks.
export default function Overlay(props: PropsWithChildren & OverlayProps) {
  function Overlay(props: PropsWithChildren & OverlayProps) {
    const bgColor = props.transparent ? 'transparent' : bgColorDefault;
    const cursor = props.busy ? 'cursor-wait' : '';
    // See Overlay.css for "overlay" class.
    return <div className={"overlay absolute top-0 right-0 left-0 bottom-0 h-screen w-full " + bgColor + " " + cursor}>
      {props.children}
    </div>;
  }

  useEffect(() => {
    const div = document.createElement('div');
    const content = <Overlay {...props}>
      {props.children}
    </Overlay>;
    ReactDOM.createRoot(div).render(content);
    document.body.appendChild(div);
    return () => {
      // TODO: Does removing the child delete the ReactDOM objects being tracked behind the scenes?
      document.body.removeChild(div);
    };
  });

  return <></>;
}
