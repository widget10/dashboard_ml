import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import DashboardContainer from "./components/DashboardContainer";
import Box from "@mui/material/Box";

import { getUser } from "./thunks";

function App({ store }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

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
