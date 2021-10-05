import { Divider, Paper } from "@mui/material";

import styled from "styled-components";

const ChartHeading = styled.div`
  color: #777575;
  font-size: 16px;
  font-weight: bold;
`;

const Actions = styled.div`
  margin: 0px 16px;
  margin-left: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
`;

const ChartBoxContainer = styled(Paper)`
  margin: 16px 0px;
  padding: 8px;
`;

const ChartContent = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

function ChartBox({ header, action, chart }) {
  return (
    <ChartBoxContainer>
      <Header>
        {header && <ChartHeading>{header}</ChartHeading>}
        {<Actions>{action}</Actions>}
      </Header>
      <Divider />
      <ChartContent>{chart}</ChartContent>
    </ChartBoxContainer>
  );
}

export default ChartBox;
