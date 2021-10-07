import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

import styled from "styled-components";

const ErrorFallback = styled.div`
  margin: 16px;
  color: red;
`;

const LineChart = () => {
  const { sales_data } = useSelector((state) => state);

  if (sales_data.length === 0)
    return <ErrorFallback>Something went wrong</ErrorFallback>;

  // useEffect(() => {}, [sales_data]);
  let xaxis = {
    categories: sales_data ? sales_data.map((x) => x.month) : [],
  };
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
    xaxis,
  };
  return (
    <Chart
      options={options}
      series={[
        {
          name: "Clicks",
          data: sales_data
            ? sales_data.map((x) => x.value)
            : [10, 41, 35, 51, 49, 62, 69, 91],
        },
      ]}
      type="line"
    />
  );
};

export default LineChart;
