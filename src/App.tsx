import React, { useCallback, useReducer } from "react";
import Row from "./Row";
import { listReducer } from "./reduser";
import "./App.css";

export interface IDataRecord {
  label: string;
  value: number;
}

function App() {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: Array.from({ length: 5 }, (_el, index) => ({
      label: `label ${index + 1}`,
      value: Math.round(100 + Math.random() * 900),
    })),
  });

  const handleUpdate = useCallback((index: number) => {
    dispatchListData({ type: "UPDATE_VALUE", index });
  }, []);

  return (
    <div className="App">
      <h1>Test app</h1>
      {listData.list.map((el, index) => (
        <Row data={el} index={index} key={el.label} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}

export default App;
