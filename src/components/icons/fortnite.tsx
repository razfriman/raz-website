import * as React from "react";

import type { IconType } from "./icon-type";

type FortniteProps = React.ComponentPropsWithoutRef<"svg"> & {
  /**
   * The title provides an accessible short text description to the SVG
   */
  title?: string;
  /**
   * Hex color or color name or "default" to use the default hex for each icon
   */
  color?: string;
  /**
   * The size of the Icon.
   */
  size?: string | number;
};

const defaultColor = "#6db8fa";

const Fortnite: IconType = React.forwardRef<SVGSVGElement, FortniteProps>(
  function Fortnite(
    { title = "Fortnite", color = "currentColor", size = 24, ...others },
    ref,
  ) {
    if (color === "default") {
      color = defaultColor;
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
        ref={ref}
        {...others}
      >
        <title>{title}</title>
        <path d="m15.767 14.171.097-5.05H12.4V5.197h3.99L16.872 0H7.128v24l5.271-.985V14.17z" />
      </svg>
    );
  },
);

export { Fortnite as default, defaultColor };
