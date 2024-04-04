import currentSessionReducer from "./Slices/currentSessionSlice";
import createUserReducer from "./Slices/ReadOnlySlices/createUserSlice";
import loginUserReducer from "./Slices/ReadOnlySlices/loginUserSlice";

// Sets up each slice Reducer to be used
// Naming conventions should be consistent
// *data: *reducer

export const reducerCollector = {
  currentSessionData: currentSessionReducer,
  createUserData: createUserReducer,
  loginUserData: loginUserReducer,
};
