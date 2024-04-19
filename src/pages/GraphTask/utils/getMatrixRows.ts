import { ICell } from "../GraphTask";

export const getMatrixRows = (graph: ICell[]) => {
  const size = Math.sqrt(graph.length);
  const matrix = [];
  let index = 0;

  for (let i = 0; i < graph.length; i += size) {
    matrix.push(graph.slice(i, i + size));
  }

  // В данном коде мы записываем индекс, соответствующий индексу ячейки в графе, в каждую ячейку матрицы
  return matrix.map((row) => row.map((cell) => ({ ...cell, index: index++ })));
};
