import React from "react";
import { IDataRecord } from "./App";

interface IReducerState {
  list: IDataRecord[];
}

interface IReducerAction {
  type: string;
  index: number;
}

export const listReducer = (state: IReducerState, action: IReducerAction) => {
  switch (action.type) {
    case "UPDATE_VALUE": {
      const newList = state.list.map((item, i) => {
        if (i === action.index) {
          return { ...item, value: Math.round(100 + Math.random() * 900) };
        }
        return item;
      });
      return { ...state, list: newList };
    }
    default:
      return state;
  }
};
