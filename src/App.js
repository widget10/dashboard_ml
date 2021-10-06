import Header from "./components/Header";
import DashboardContainer from "./components/DashboardContainer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Box mt={8}>
        <DashboardContainer />
      </Box>
    </Box>
  );
}

export default App;
