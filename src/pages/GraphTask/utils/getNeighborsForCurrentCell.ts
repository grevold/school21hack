import { GraphCell, ICell } from "../GraphTask";
import { horizontalNeighbors } from "./horizontalNeighbors";
import { verticalNeighbors } from "./verticalNeighbors";

export const getNeighborsForCurrentCell = (
  cell: GraphCell,
  indexCell: number,
  indexMotionRows: number,
  indexMotionColumns: number,
  graph: GraphCell[]
) => {
  return [
    ...horizontalNeighbors(indexCell, indexMotionRows, cell, graph), // пути по горизонтали
    ...verticalNeighbors(indexCell, indexMotionColumns, cell, graph), // пути по вертикали
  ];
};
