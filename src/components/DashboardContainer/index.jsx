import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Grid, Skeleton, IconButton } from "@mui/material";
import MyChartContainer from "../MyChartContainer";
import ChartBox from "../ChartBox";
import LineChart from "../Visualisations/LineChart";
import ColumnBarGraph from "../Visualisations/ColumnBarGraph";
import CountChart from "../Visualisations/CountChart";
import DonutChart from "../Visualisations/DonutChart";
import { getSales, getProfits } from "../../thunks";
import { CustomButton, Banner, StyledHeading } from "./styles";
import Refresh from "@mui/icons-material/RefreshRounded";

function DashboardContainer() {
  const { isLoading, user } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  const handleProfitRefresh = () => {
    dispatch(getProfits());
  };

  return (
    <Container fluid style={{ marginTop: "16px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          <MyChartContainer
            text={"Dashboard"}
            content={
              <MyChartContainer
                margin="none"
                text={<StyledHeading>Overview</StyledHeading>}
                content={
                  <Banner>
                    <div className="banner-text">
                      {!isLoading ? (
                        <div className="header">
                          {`Welcome ${user ? user.name : "User"},`}
                        </div>
                      ) : (
                        <div className="header">
                          <Skeleton />
                        </div>
                      )}
                      <p className="content">
                        You have a great score. Add more rewards to your account
                        by redeeming your coupons.
                      </p>
                    </div>
                    <div className="score-card">
                      <div className="score">95</div>
                      <div className="tagline">Points</div>
                    </div>
                  </Banner>
                }
                action={<CustomButton>Check Now</CustomButton>}
              />
            }
          />
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <MyChartContainer
            text={"Monthly Stats"}
            action={
              <IconButton
                size="large"
                onClick={handleProfitRefresh}
                color="inherit"
              >
                <Refresh />
              </IconButton>
            }
            content={<ChartBox chart={<CountChart />} />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Sales Stat"}
            content={
              <div id="chart-container-column">
                <ChartBox
                  header="Sales"
                  action={<Button variant="text">View</Button>}
                  chart={ColumnBarGraph}
                />
              </div>
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <div id="chart-container-line">
            <MyChartContainer
              text={"Trends"}
              content={
                <ChartBox
                  header="Clicks Trend"
                  action={<Button variant="text">View</Button>}
                  chart={<LineChart />}
                />
              }
            />
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <div id="chart-container-donut">
            <MyChartContainer
              text={"Trends"}
              content={
                <ChartBox
                  header="Views"
                  action={<Button variant="text">View</Button>}
                  chart={<div>{DonutChart}</div>}
                />
              }
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardContainer;
