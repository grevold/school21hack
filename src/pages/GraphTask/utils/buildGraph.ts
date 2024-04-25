import { ICell } from "../GraphTask";

// // Интерфейс, описывающий узел графа.
interface IGraphNode {
  id: number;
  routes: number[]; // Массив айдишников тех узлов, в которые можно попасть из этого.
}

const mapCellIdToTableCoordinates = (
  cellId: number,
  tableSize: number
): [number, number] => {
  const rowIndex = Math.floor(cellId / tableSize);
  const columnIndex = cellId % tableSize;
  return [rowIndex, columnIndex];
};

const mapTableCoordinatesToCellId = (
  rowIndex: number,
  columnIndex: number,
  tableSize: number
): number => {
  return rowIndex * tableSize + columnIndex;
};

export const buildGraph = (cells: ICell[]): IGraphNode[] => {
  const graph: IGraphNode[] = [];

  const tableSize = Math.sqrt(cells.length); // Ширина (равная высоте) таблицы.

  cells.forEach((cell, cellId) => {
    const newGraphNode: IGraphNode = {
      id: cellId,
      routes: [],
    };

    const [rowIndex, columnIndex] = mapCellIdToTableCoordinates(
      cellId,
      tableSize
    );

    // Проверяем все ячейки, лежащие на той же строке.
    for (let j = 0; j < tableSize; j++) {
      // Чтобы не сравнивать текущую ячейку с самой собой.
      if (j !== columnIndex) {
        const idOfCellOnTheSameRow = mapTableCoordinatesToCellId(
          rowIndex,
          j,
          tableSize
        );
        const cellOnTheSameRow = cells[idOfCellOnTheSameRow];

        if (
          cellOnTheSameRow.color === cell.color ||
          cellOnTheSameRow.figure === cell.figure
        ) {
          newGraphNode.routes.push(idOfCellOnTheSameRow);
        }
      }
    }

    // Проверяем все ячейки, лежащие в том же столбце.
    for (let i = 0; i < tableSize; i++) {
      // Чтобы не сравнивать текущую ячейку с самой собой.
      if (i !== rowIndex) {
        const idOfCellOnTheSameColumn = mapTableCoordinatesToCellId(
          i,
          columnIndex,
          tableSize
        );
        const cellOnTheSameColumn = cells[idOfCellOnTheSameColumn];

        if (
          cellOnTheSameColumn.color === cell.color ||
          cellOnTheSameColumn.figure === cell.figure
        ) {
          newGraphNode.routes.push(idOfCellOnTheSameColumn);
        }
      }
    }

    graph.push(newGraphNode);
  });

  return graph;
};
