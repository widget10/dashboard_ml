import { Box } from "@mui/material";

import styled from "styled-components";

const ChartHeading = styled.div`
  color: #b1aeae;
  font-size: 14px;
  font-weight: bold;
  margin: 12px 8px 12px 0px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Actions = styled.div`
  margin-left: auto;
`;

function MyChartContainer({ text, action, content, margin }) {
  return (
    <Box style={margin ? { margin } : { margin: "8px" }}>
      <Header>
        {text && <ChartHeading>{text}</ChartHeading>}
        {action && <Actions>{action}</Actions>}
      </Header>
      {content}
    </Box>
  );
}

export default MyChartContainer;
