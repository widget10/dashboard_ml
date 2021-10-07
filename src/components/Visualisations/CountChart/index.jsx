import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfits } from "../../../thunks";

const CountChart = () => {
  const { profit_data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const total = profit_data.reduce((partial_sum, a) => partial_sum + a, 0);

  useEffect(() => {
    dispatch(getProfits());
  });

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
      text: `$${total}`,
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
  return (
    <Chart
      options={options}
      series={[
        {
          name: "Profits",
          data: profit_data,
        },
      ]}
      type="area"
    />
  );
};

export default CountChart;
