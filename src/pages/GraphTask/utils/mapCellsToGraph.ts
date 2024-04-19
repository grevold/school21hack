import { GraphCell, ICell } from "../GraphTask";

export const mapCellsToGraph = (cells: ICell[]): GraphCell[] => {
  return cells.map((cell, index) => ({ ...cell, routes: [] }));
};
