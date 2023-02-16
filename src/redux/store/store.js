import { createStore } from "redux";
import reducer from "../reducerFunction/reducerFunciton";

const store = createStore(reducer);

export default store;