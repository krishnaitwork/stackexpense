import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
Chart.register(ArcElement);

const Charts = () => {
  const expenses = useSelector((state) => state.expense);
  console.log("chartyt", expenses.Categories);

  // const sum = () => {
  //   let sum = expenses.Categories.map((objs, key) => {
  //     objs.type, objs.color, objs.percent
  //     // if (!type) return objs.sumBy(objs, "price"); // [300, 350, 500]
  //   });

  //   console.log("chart", sum);
  //   return sum;
  // };

  const config = {
    data: {
      datasets: [
        {
          data: expenses.Categories.map((objs) => objs.percent),
          backgroundColor: expenses.Categories.map((objs) => objs.color),
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 5,
        },
      ],
    },
    options: {
      cutout: 115,
      maintainAspectRatio: true,
    },
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Doughnut {...config} />
    </div>
  );
};

export default Charts;
