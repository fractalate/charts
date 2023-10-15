import { PropsWithChildren } from "react";

// TODO: Conceptual cleanup.

interface HeaderClosable1 {
  closable?: false;
}
interface HeaderClosable2 {
  closable: true;
  onClose: () => any;
}
type HeaderClosable = HeaderClosable1 | HeaderClosable2;

interface HeaderHamburger1 {
  hamburger?: false;
}
interface HeaderHamburger2 {
  hamburger: true;
  options: [];
}
type HeaderHamburger = HeaderHamburger1 | HeaderHamburger2;

export function Header(props: PropsWithChildren & HeaderClosable & HeaderHamburger) {
  // TODO: Need a better closing icon.
  return <div className="block">
    {(props.closable) && <div>
      <button onClick={props.onClose}>X</button>
    </div>}
    {props.children}
    {(props.hamburger) && <div>
      {
        // TODO: How to do a hamburger?
      }
    </div>}
  </div>
}
