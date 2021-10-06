import Chart from "react-apexcharts";

var options = {
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "14px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "32px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
};

const RadialChart = (
  <Chart
    id="chart-container-radial"
    options={options}
    series={[75]}
    type="radialBar"
  />
);

export default RadialChart;
