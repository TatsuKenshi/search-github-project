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

  // calculating the most used languages
  // first, we reduce the staticRepos object
  let allLanguages = staticRepos.reduce((total, singleItem) => {
    // then, we extract the language property from each item
    const { language } = singleItem;

    // if the language property is null, we return total
    if (!language) return total;

    // we then check if the total contains the language
    // if not, we create an entry for it within the "total" object
    // if yes, we spread the total object and increase the corresponding entry by 1.
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }

    return total;
  }, {});

  // we turn the allLanguages object into an array, sort it from the biggest to the smallest value, and slice top five entries.
  allLanguages = Object.values(allLanguages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  console.log(allLanguages);

  const chartData = [
    {
      label: "HTML",
      value: "15",
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
      {/* <ChartSample data={chartData}></ChartSample> */}
      <ChartPie3d data={allLanguages}>
        {/* instead of the dummy chartData, we pass the allLanguages array to the ChartPie3d component */}
      </ChartPie3d>
      <ChartBar3d></ChartBar3d>
      <ChartColumn3d></ChartColumn3d>
      <ChartDoughnut2d></ChartDoughnut2d>
    </div>
  );
};

export default ChartSection;
