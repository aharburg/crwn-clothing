import { combineReducers } from "redux";

import userReduecer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReduecer,
  cart: cartReducer
});
