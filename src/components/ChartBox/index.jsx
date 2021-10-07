import { Divider } from "@mui/material";
import { Actions, Header, ChartHeading, ChartBoxContainer } from "./styles";

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
