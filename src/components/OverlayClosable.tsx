import { PropsWithChildren } from "react";

export default function OverlayClosable(props: PropsWithChildren & { onClose: () => void, transparent?: boolean }) {
  return <div>
    <div className="block"><button onClick={props.onClose}>X</button></div>
    {props.children}
  </div>
}
