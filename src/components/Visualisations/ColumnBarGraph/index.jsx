import Chart from "react-apexcharts";

var options = {
  chart: {
    stacked: true,
    zoom: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

const series = [
  {
    name: "PRODUCT A",
    data: [44, 55, 41, 67, 22, 43],
  },
  {
    name: "PRODUCT B",
    data: [13, 23, 20, 8, 13, 27],
  },
];
const ColumnBarGraph = (
  <Chart
    // id="chart-container-column"
    options={options}
    series={series}
    type="bar"
  />
);

export default ColumnBarGraph;
