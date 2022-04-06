import React, { useEffect, useState } from "react";

import { IDataRecord } from "./App";

import "./style.css";

interface IRowProps {
  data: IDataRecord; // TODO
  index: number;
  onUpdate: (index: number) => void;
  key: number;
}

function Row(props: IRowProps) {
  const [renderCount, setRenderCount] = useState<number>(0);
  const data = props.data;

  const handleClick = () => {
    props.onUpdate(props.index);
  };

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [props.data]);

  return (
    <div>
      <span className="label">{data.label}:</span>
      <span>
        {data.value}({renderCount})
      </span>
      <button className="button" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default Row;
