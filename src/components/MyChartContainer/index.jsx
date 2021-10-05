import { Box } from "@mui/material";

import styled from "styled-components";

const ChartHeading = styled.div`
  color: #b1aeae;
  font-size: 14px;
  font-weight: bold;
  margin: 12px 8px 12px 0px;
`;

function MyChartContainer({ text, chart }) {
  return (
    <Box style={{ margin: "32px" }}>
      {text && <ChartHeading>{text}</ChartHeading>}
      {chart}
    </Box>
  );
}

export default MyChartContainer;
