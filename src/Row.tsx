import React, { memo, useCallback, useRef } from "react";

import { IDataRecord } from "./App";

import "./style.css";

interface IRowProps {
  data: IDataRecord; // TODO
  index: number;
  onUpdate: (index: number) => void;
}

function Row({ data, index, onUpdate }: IRowProps) {
  const renderCount = useRef(0);
  const { label, value } = data;

  const handleClick = () => {
    onUpdate(index);
  };

  renderCount.current = renderCount.current + 1;
  console.log("rendered", label);
  return (
    <div>
      <span className="label">{label}:</span>
      <span>{value}</span>
      <span>({renderCount.current})</span>
      <button className="button" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default memo(Row);
