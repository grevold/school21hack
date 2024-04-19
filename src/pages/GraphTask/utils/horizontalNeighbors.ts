import { GraphCell } from "../GraphTask";
import { getMatrixRows } from "./getMatrixRows";

export const horizontalNeighbors = (
  currentIndex: number,
  indexMotionRows: number,
  cell: GraphCell,
  graph: GraphCell[]
) => {
  const matrixRows = getMatrixRows(graph); // Создаем матрицу по строкам графа
  const neighbors = [];
  const row = matrixRows[indexMotionRows]; //выделяем строку

  for (let i = 0; i < row.length; i++) {
    if (currentIndex === row[i].index) {
      continue;
    }
    if (row[i].color === cell.color || row[i].figure === cell.figure) {
      neighbors.push(row[i].index); // записываем индексы ячеек в строке
    }
  }

  return neighbors;
};
