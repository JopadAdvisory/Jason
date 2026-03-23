import type { JSX } from "react";
import "./buttons.css";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
};

function Button ({ children, href, className } : ButtonProps): JSX.Element {
  return (
    <div className="btnContainer">
      <a href={href} className={className}>{children}</a>
    </div>
  )
}

export { Button };