import { DefaultOptionType } from "antd/es/select";

export const tableSizeOptions: DefaultOptionType[] = [
  { value: 3, label: "3x3" },
  { value: 4, label: "4x4" },
  { value: 5, label: "5x5" },
  { value: 6, label: "6x6" },
  { value: 7, label: "7x7" },
  { value: 8, label: "8x8" },
  { value: 9, label: "9x9" },
  { value: 10, label: "10x10" },
  { value: 11, label: "11x11" },
  { value: 12, label: "12x12" },
];

interface IState {
  tableSize: number;
  idsOfActiveCells: number[];
}

export enum EActionType {
  changeTableSize = "changeTableSize",
  clickCell = "clickCell",
  cleanTable = "cleanTable",
}

type TAction =
  | {
      type: EActionType.changeTableSize;
      payload: number;
    }
  | {
      type: EActionType.clickCell;
      payload: number;
    }
  | {
      type: EActionType.cleanTable;
    };

export const initialState: IState = {
  tableSize: 3,
  idsOfActiveCells: [],
};

export const reducer = (prevState: IState, action: TAction): IState => {
  switch (action.type) {
    case EActionType.changeTableSize: {
      return {
        tableSize: action.payload,
        idsOfActiveCells: [],
      };
    }
    case EActionType.clickCell: {
      const clickedCellId = action.payload;

      return {
        ...prevState,
        idsOfActiveCells: prevState.idsOfActiveCells.includes(clickedCellId)
          ? prevState.idsOfActiveCells.filter((id) => id !== clickedCellId)
          : [...prevState.idsOfActiveCells, clickedCellId],
      };
    }
    case EActionType.cleanTable: {
      return {
        ...prevState,
        idsOfActiveCells: [],
      };
    }
    default: {
      return prevState;
    }
  }
};
