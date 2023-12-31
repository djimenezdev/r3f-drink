import { ReactThreeFiber } from "@react-three/fiber";

export type TextProps = JSX.IntrinsicElements["mesh"] & {
  children: React.ReactNode;
  characters?: string;
  color?: ReactThreeFiber.Color;
  fontSize?: number;
  maxWidth?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "right" | "center" | "justify";
  font?: string;
  anchorX?: number | "left" | "center" | "right";
  anchorY?:
    | number
    | "top"
    | "top-baseline"
    | "middle"
    | "bottom-baseline"
    | "bottom";
  clipRect?: [number, number, number, number];
  depthOffset?: number;
  direction?: "auto" | "ltr" | "rtl";
  overflowWrap?: "normal" | "break-word";
  whiteSpace?: "normal" | "overflowWrap" | "nowrap";
  outlineWidth?: number | string;
  outlineOffsetX?: number | string;
  outlineOffsetY?: number | string;
  outlineBlur?: number | string;
  outlineColor?: ReactThreeFiber.Color;
  outlineOpacity?: number;
  strokeWidth?: number | string;
  strokeColor?: ReactThreeFiber.Color;
  strokeOpacity?: number;
  fillOpacity?: number;
  sdfGlyphSize?: number;
  debugSDF?: boolean;
  onSync?: ((troika: unknown) => void) | undefined;
};
