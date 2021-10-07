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
  }, [dispatch]);

  return (
    <Box>
      <Header />
      <Box mt={4}>
        <DashboardContainer />
      </Box>
    </Box>
  );
}

export default App;
