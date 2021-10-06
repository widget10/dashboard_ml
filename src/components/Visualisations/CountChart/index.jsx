import Chart from "react-apexcharts";
var options = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "straight",
  },
  colors: ["#45b436"],
  title: {
    text: "$135,965",
    style: {
      fontSize: "24px",
    },
  },
  subtitle: {
    text: "Profits",
    style: {
      fontSize: "14px",
    },
  },
};
const CountChart = (
  <Chart
    options={options}
    series={[
      {
        name: "Profits",
        data: [10, 41, 35, 51, 49, 62, 69, 91],
      },
    ]}
    type="area"
  />
);

export default CountChart;
