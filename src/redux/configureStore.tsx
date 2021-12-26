import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { connectRouter } from "connected-react-router";
import User from "./modules/user";

export const history = createBrowserHistory();


const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;
