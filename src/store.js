import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers";

const store = configureStore({ reducer: dashboardReducer });

export default store;
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
