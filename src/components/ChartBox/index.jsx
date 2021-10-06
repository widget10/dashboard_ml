import { Divider, Paper } from "@mui/material";
import styled from "styled-components";

const ChartHeading = styled.div`
  display: flex;
  align-items: center;
  color: #777575;
  font-size: 16px;
  font-weight: bold;
  margin: 0px 16px;
`;

const Actions = styled.div`
  margin: 0px 16px;
  margin-left: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ChartBoxContainer = styled(Paper)`
  margin: 16px 0px;
  padding: 8px;
`;

function ChartBox({ header, action, chart }) {
  return (
    <ChartBoxContainer>
      <Header>
        {header && <ChartHeading>{header}</ChartHeading>}
        {action && <Actions>{action}</Actions>}
      </Header>

      {header || action ? <Divider style={{ margin: "8px 0px" }} /> : null}
      {chart}
    </ChartBoxContainer>
  );
}

export default ChartBox;
