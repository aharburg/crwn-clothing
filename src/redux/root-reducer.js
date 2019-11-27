import { combineReducers } from "redux";

import userReduecer from "./user/user.reducer";

export default combineReducers({
  user: userReduecer
});
