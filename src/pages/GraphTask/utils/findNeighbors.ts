import { GraphCell } from "../GraphTask";
import { getNeighborsForCurrentCell } from "./getNeighborsForCurrentCell";

export const findNeighbors = (graph: GraphCell[]): GraphCell[] => {
  const result = [];

  let indexRows = 0; //индекс, который помогает продвигаться по матрице строк
  let indexColumns = 0; //индекс, который помогает продвигаться по матрице колонок

  for (let i = 0; i < graph.length; i++) {
    const cell: GraphCell = graph[i]; // определяем ячейку

    // Цикл, который изменяет индекс смещения по строкам
    if (i === 0 || i % Math.sqrt(graph.length) !== 0) {
      indexRows = indexRows;
    } else {
      indexRows++;
    }

    // Цикл, который изменяет индекс смещения по колонкам и обнуляет его, когда индекс достигает размерности матрицы
    if (i === 0 || i % Math.sqrt(graph.length) === 0) {
      indexColumns = 0;
    } else {
      indexColumns++;
    }

    //В эту переменную приходит массив путей и по вертикали и по горизонтали для ячейки
    const neighbors = getNeighborsForCurrentCell(
      cell,
      i,
      indexRows,
      indexColumns,
      graph
    );

    //Записываем в ячейку вычисленные значения для routes
    result.push({
      ...cell,
      routes: neighbors,
    });
  }
  return result;
};
