import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //const maxValue = Math.max(...dataPointValues);

  const totalValue = dataPointValues.reduce((a, b) => {
    return a + b;
  }, 0);
  //console.log(totalValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          totalVal={totalValue}
          label={dataPoint.label}
          title={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
