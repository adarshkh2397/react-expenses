import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.totalVal > 0) {
    barFillHeight = Math.round((props.value / props.totalVal) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <span className="tooltiptext">{props.title}</span>
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
