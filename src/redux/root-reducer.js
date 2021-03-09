import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth.reducer";
import serviceReducer from "./ourServices/service.reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["authReducer"],
};

const rootReducer = combineReducers({
  authReducer,
  serviceReducer,
});

export default persistReducer(persistConfig, rootReducer);
