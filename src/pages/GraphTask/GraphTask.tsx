import { Button, Select } from "antd";
import { useMemo, useState } from "react";
import { colorsOptions, figuresOptions, tableSizeOptions } from "./constants";
import s from "./GraphTask.module.css";
import { getAnswerByCellsArray } from "./utils/getAnswerByCellsArray";
import { getArrayFrom0ToN } from "./utils/getArrayFrom0ToN";

export interface ICell {
  color?: string;
  figure?: number;
}

interface IState {
  tableSize: number;
  cells: ICell[];
  answer: number[];
}

const initialState: IState = {
  tableSize: 3,
  cells: getArrayFrom0ToN(3 * 3).map(() => ({})),
  answer: [],
};

export const GraphTask = () => {
  const [state, setState] = useState<IState>(initialState);

  const cellsIds = useMemo(
    () => getArrayFrom0ToN(state.tableSize * state.tableSize),
    [state.tableSize]
  );

  const handleSubmit = () => {
    setState((prevState) => ({
      ...prevState,
      answer: getAnswerByCellsArray(prevState.cells),
    }));
  };

  const handleClear = () => {
    setState((prevState) => ({
      ...prevState,
      cells: getArrayFrom0ToN(prevState.tableSize * prevState.tableSize).map(
        () => ({})
      ),
      answer: [],
    }));
  };

  const handleTableSizeChange = (tableSize: number) => {
    setState((prevState) => ({
      ...prevState,
      tableSize,
      cells: getArrayFrom0ToN(tableSize * tableSize).map(() => ({})),
    }));
  };

  function handleCellChange<T extends keyof ICell>(id: number, field: T) {
    const handler = (newValue: ICell[T]) => {
      setState((prevState) => ({
        ...prevState,
        cells: cellsIds.reduce<ICell[]>(
          (accumulator, cellId) =>
            cellId === id
              ? [
                  ...accumulator,
                  {
                    ...state.cells[cellId],
                    [field]: newValue,
                  },
                ]
              : [...accumulator, state.cells[cellId]],
          []
        ),
      }));
    };

    return handler;
  }

  return (
    <div>
      <h1>Задача на графы</h1>

      <div className={s.buttonsPanel}>
        <Select
          options={tableSizeOptions}
          onChange={handleTableSizeChange}
          value={state.tableSize}
        />

        <Button
          disabled={state.cells.every(
            ({ color, figure }) => color === undefined && figure === undefined
          )}
          onClick={handleClear}
        >
          Очистить
        </Button>
        <Button
          disabled={
            state.cells.length !== state.tableSize * state.tableSize ||
            state.cells.some(
              ({ color, figure }) => color === undefined || figure === undefined
            )
          }
          onClick={handleSubmit}
        >
          Показать путь
        </Button>
      </div>

      <ul
        className={s.table}
        style={{
          gridTemplate: `repeat(${state.tableSize}, 1fr) / repeat(${state.tableSize}, 1fr)`,
        }}
      >
        {cellsIds.map((id) => (
          <li key={id} className={s.cell}>
            <div>
              <Select
                options={colorsOptions}
                value={state.cells[id].color}
                onChange={handleCellChange(id, "color")}
              />
              <Select
                options={figuresOptions}
                value={state.cells[id].figure}
                onChange={handleCellChange(id, "figure")}
              />
            </div>

            <div style={{ color: state.cells[id].color }}>
              {state.cells[id].figure}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
