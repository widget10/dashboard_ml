import Header from "./components/Header";
import DashboardContainer from "./components/DashboardContainer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box style={{ height: "100vh", background: "#f4f4f4" }}>
      <Header />
      <Box>
        <DashboardContainer />
      </Box>
    </Box>
  );
}

export default App;
