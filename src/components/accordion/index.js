import React, { useState } from "react";

export { default as Item } from "./Item";

export { default as IconPlay } from "public/images/icon-play.svg";
export { default as IconLock } from "public/images/icon-lock.svg";

export default function Accordion({ children }) {
  const [Active, setActive] = useState(() => null);

  function toggle(id) {
    setActive((prev) => (prev === id ? null : id));
  }

  return <div className="accordion">{children(Active, toggle)}</div>;
}
