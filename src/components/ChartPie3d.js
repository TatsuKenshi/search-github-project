// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import TheChart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, TheChart, FusionTheme);

const ChartSample = ({ data }) => {
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "450", // Width of the chart
    height: "450", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Programming Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "35%",
        // paletteColors: "#f0db4f",
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartSample;
