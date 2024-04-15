import { DefaultOptionType } from "antd/es/select";

const colors: string[] = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "black",
  "white",
];

export const tableSizeOptions: DefaultOptionType[] = [
  { value: 2, label: "2x2" },
  { value: 3, label: "3x3" },
  { value: 4, label: "4x4" },
  { value: 5, label: "5x5" },
  { value: 6, label: "6x6" },
  { value: 7, label: "7x7" },
  { value: 8, label: "8x8" },
  { value: 9, label: "9x9" },
  { value: 10, label: "10x10" },
  { value: 11, label: "11x11" },
  { value: 12, label: "12x12" },
];

export const colorsOptions: DefaultOptionType[] = colors.map((color) => ({
  value: color,
  label: <span style={{ color }}>{color}</span>,
}));

export const figuresOptions: DefaultOptionType[] = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];
