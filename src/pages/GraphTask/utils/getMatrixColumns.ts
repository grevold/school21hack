import { ICell } from "../GraphTask";

export const getMatrixColumns = (graph: ICell[]) => {
  const size = Math.sqrt(graph.length);
  const matrix = [];
  for (let i = 0; i < size; i++) {
    let column = [];
    for (let j = i; j < graph.length; j += size) {
      column.push({ ...graph[j], index: j });
    }
    matrix.push(column);
    column = [];
  }
  return matrix;
};
