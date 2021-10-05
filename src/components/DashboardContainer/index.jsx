import { Container, Box, Button, Grid } from "@mui/material";
import MyChartContainer from "../MyChartContainer";
import ChartBox from "../ChartBox";

function DashboardContainer() {
  return (
    <Container fluid style={{ marginTop: "16px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          <MyChartContainer
            text={"Dashboard"}
            chart={
              <ChartBox
                header="Funnel"
                action={<Button variant="text">Text</Button>}
                chart="Visualisation"
              />
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Dashboard"}
            chart={
              <ChartBox
                header="Funnel"
                action={<Button variant="text">Text</Button>}
                chart="Visualisation"
              />
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Dashboard"}
            chart={
              <ChartBox
                header="Funnel"
                action={<Button variant="text">Text</Button>}
                chart="Visualisation"
              />
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Dashboard"}
            chart={
              <ChartBox
                header="Funnel"
                action={<Button variant="text">Text</Button>}
                chart="Visualisation"
              />
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Dashboard"}
            chart={
              <ChartBox
                header="Funnel"
                action={<Button variant="text">Text</Button>}
                chart="Visualisation"
              />
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <MyChartContainer
            text={"Dashboard"}
            chart={
              <ChartBox
                header="Funnel"
                action={<Button variant="text">Text</Button>}
                chart="Visualisation"
              />
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardContainer;
