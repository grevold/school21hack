import { ICell } from "../GraphTask";
import { buildGraph } from "./buildGraph";

export const getAnswerByCellsArray = (cells: ICell[]): any[] => {
  const graph = buildGraph(cells); //в эту переменную записывается граф с пустыми routes:[]
  return graph;
};
