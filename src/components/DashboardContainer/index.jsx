import { Container, Box, Button, Grid } from "@mui/material";
import styled from "styled-components";

import MyChartContainer from "../MyChartContainer";
import ChartBox from "../ChartBox";
import LineChart from "../Visualisations/LineChart";
import ColumnBarGraph from "../Visualisations/ColumnBarGraph";
import RadialChart from "../Visualisations/RadialBar";
import CountChart from "../Visualisations/CountChart";

const CustomButton = styled(Button)`
  padding: 8px 32px;
  border-radius: 4px;
  color: #535151;
  border: 1px solid #a5a4a4;
  font-size: 12px;
  font-weight: bold;
  text-transform: none;

  &.active {
    background-color: #004386;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const StyledHeading = styled.div`
  color: #535151;
  font-size: 32px;
  text-transform: none;
  font-weight: normal;
`;

const Banner = styled(Box)`
  background-color: #075be0;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  height: 190px;
  display: flex;
  align-items: center;

  .score-card {
    background: #17357d;
    padding: 42px;
    color: #efef00;
    margin: 8px 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
  }

  .score {
    font-size: 48px;
  }

  .banner-text {
    /* align-items: center;
    justify-content: center; */
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    margin: 5%;
    .header {
      color: white;
      font-size: 24px;
    }
    .content {
      color: white;
    }
  }
`;

function DashboardContainer() {
  const expandToFullScreen = (chartType) => {
    const elem = document.getElementById(`chart-container-${chartType}`);
    if (elem?.requestFullscreen) elem.requestFullscreen();
    else if (elem?.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem?.msRequestFullscreen) elem.msRequestFullscreen();
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
                      <div className="header">Congrats User !!</div>
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
            // content={<ChartBox chart={LineChart} />}
            content={<ChartBox chart={CountChart} />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Sales Stat"}
            content={
              <div id="chart-container-column">
                <ChartBox
                  header="Sales"
                  action={
                    <Button
                      variant="text"
                      onClick={() => expandToFullScreen("column")}
                    >
                      Expand
                    </Button>
                  }
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
                  action={
                    <Button
                      variant="text"
                      onClick={() => expandToFullScreen("line")}
                    >
                      Expand
                    </Button>
                  }
                  chart={LineChart}
                />
              }
            />
          </div>
        </Grid>

        {/* <Grid xs={12} sm={6} md={4}>
          <div id="chart-container-line">
            <MyChartContainer
              text={"Trends"}
              content={
                <ChartBox
                  header="Clicks Trend"
                  action={<Button variant="primary">New Task</Button>}
                  chart={
                    <>
                      <Banner />
                    </>
                  }
                />
              }
            />
          </div>
        </Grid> */}

        <Grid xs={12} sm={6} md={4}>
          <div id="chart-container-radial">
            <MyChartContainer
              text={"User Visits"}
              content={
                <ChartBox header="Views" chart={<div>{RadialChart}</div>} />
              }
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardContainer;
