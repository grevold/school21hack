import { Select } from "antd";
import { useMemo, useReducer } from "react";
import {
  EActionType,
  initialState,
  reducer,
  tableSizeOptions,
} from "./constants";
import s from "./TableShulte.module.css";

// Возвращает массив всевозможных айдишников ячеек для такого размера таблицы.
const getCellsIdsByTableSize = (tableSize: number): number[] => {
  return Array.from(Array(tableSize * tableSize).keys());
};

export const TableShulte = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allIds = useMemo(
    () => getCellsIdsByTableSize(state.tableSize),
    [state.tableSize]
  );

  return (
    <div>
      <h1>Таблица Шульте</h1>
      <Select
        defaultValue={state.tableSize}
        style={{ width: 120, marginTop: "50px" }}
        onChange={(value) =>
          dispatch({
            type: EActionType.changeTableSize,
            payload: value,
          })
        }
        options={tableSizeOptions}
      />
      <button
        className={s.button_clean}
        onClick={() => dispatch({ type: EActionType.cleanTable })}
      >
        Очистить
      </button>
      <ul
        className={s.table}
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: `${Number(state.tableSize) * 50}px`,
        }}
      >
        {allIds.map((id) => (
          <li
            key={id}
            className={
              state.idsOfActiveCells.includes(id) ? s.cell_active : s.cell
            }
            onClick={() =>
              dispatch({ type: EActionType.clickCell, payload: id })
            }
          />
        ))}
      </ul>
    </div>
  );
};
