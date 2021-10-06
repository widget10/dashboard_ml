import Chart from "react-apexcharts";

var options = {
  chart: {
    type: "line",
    zoom: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  // title: {
  //   text: "Total Sales",
  //   align: "left",
  // },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};
const LineChart = (
  <Chart
    options={options}
    series={[
      {
        name: "Clicks",
        data: [10, 41, 35, 51, 49, 62, 69, 91],
      },
    ]}
    type="line"
  />
);

export default LineChart;
