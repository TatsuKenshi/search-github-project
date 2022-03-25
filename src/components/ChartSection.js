import React from "react";
// import styled from "styled-components";
import { UserContext } from "../context/Context";
import ChartSample from "./ChartSample";
import ChartBar3d from "./ChartBar3d";
import ChartColumn3d from "./ChartColumn3d";
import ChartDoughnut2d from "./ChartDoughnut2d";
import ChartPie3d from "./ChartPie3d";

const ChartSection = () => {
  const { staticRepos } = React.useContext(UserContext);
  console.log(staticRepos);

  const chartData = [
    {
      label: "HTML",
      value: "10",
    },
    {
      label: "CSS",
      value: "20",
    },
    {
      label: "JavaScript",
      value: "60",
    },
  ];

  return (
    <div>
      <h3>Chart Section</h3>
      <ChartSample data={chartData}></ChartSample>
      <ChartBar3d></ChartBar3d>
      <ChartColumn3d></ChartColumn3d>
      <ChartDoughnut2d></ChartDoughnut2d>
      <ChartPie3d></ChartPie3d>
    </div>
  );
};

export default ChartSection;
