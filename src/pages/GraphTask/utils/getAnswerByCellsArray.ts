import { ICell } from "../GraphTask";
import { findNeighbors } from "./findNeighbors";
import { mapCellsToGraph } from "./mapCellsToGraph";

export const getAnswerByCellsArray = (cells: ICell[]): any[] => {
  const graph = mapCellsToGraph(cells); //в эту переменную записывается граф с пустыми routes:[]

  return findNeighbors(graph); // тут возвращается граф с записанными в routes маршрутами, то есть индексами ячеек
};
