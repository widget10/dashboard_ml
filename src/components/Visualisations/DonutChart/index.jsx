import Chart from "react-apexcharts";

var options = {
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      offsetY: 20,
    },
  },
  title: {
    text: "Department Sales",
    style: {
      fontSize: "18px",
    },
  },
  labels: [
    "Clothing",
    "Food Products",
    "Electronics",
    "Kitchen Utility",
    "Gardening",
  ],
};

const DonutChart = (
  <Chart
    id="chart-container-radial"
    options={options}
    series={[21, 23, 19, 14, 6]}
    type="donut"
  />
);

export default DonutChart;
