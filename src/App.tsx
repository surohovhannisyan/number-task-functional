import React, { useState } from "react";
import Row from "./Row";
import "./App.css";

export interface IDataRecord {
  label: string;
  value: number;
}

function App() {
  const [state, setState] = useState({
    list: Array.from({ length: 200 }, (_el, index) => ({
      label: `label ${index + 1}`,
      value: Math.round(100 + Math.random() * 900),
    })),
  });
  console.log(state);

  const handleUpdate = (index: number) => {
    setState((prevState) => {
      const newList = prevState.list.map((item, i) => {
        if (index === i) {
          return { ...item, value: Math.round(100 + Math.random() * 900) };
        }
        return item;
      });
      return { ...prevState, list: newList };
    });
  };

  return (
    <div className="App">
      <h1>Test app</h1>
      {state.list.map((el, index) => (
        <Row data={el} index={index} key={index} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}

export default App;
