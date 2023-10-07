import { PropsWithChildren } from "react";

export default function Page(props: PropsWithChildren) {
  // absolute, top-0, right-0, left-0, bottom-0, h-screen, w-screen, overflow-y-scroll - These work together to make the page component that takes up the whole screen and has a scroll bar inside.
  // p-1 - This adds the layout padding for all pages.
  return <div className="p-1">
    {props.children}
  </div>;
}
