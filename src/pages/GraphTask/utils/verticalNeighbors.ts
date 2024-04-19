import { GraphCell } from "../GraphTask";
import { getMatrixColumns } from "./getMatrixColumns";

export const verticalNeighbors = (
  currentIndex: number,
  indexMotionColumns: number,
  cell: GraphCell,
  graph: GraphCell[]
) => {
  const matrixColumns = getMatrixColumns(graph); // Создаем матрицу по колонкам графа
  const neighbors = [];
  const column = matrixColumns[indexMotionColumns]; // выделяем колонку

  for (let i = 0; i < column.length; i++) {
    if (currentIndex === column[i].index) {
      continue;
    }
    if (column[i].color === cell.color || column[i].figure === cell.figure) {
      neighbors.push(column[i].index); // записываем индексы ячеек в колонке
    }
  }

  return neighbors;
};
