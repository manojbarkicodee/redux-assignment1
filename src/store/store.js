import {legacy_createStore,combineReducers} from "redux"
import { authreducer } from "./auth/authreducer"
import { todoreducer } from "./todo/todoreducer"

let rootreducer=combineReducers({authred:authreducer,todo:todoreducer})
export const store=legacy_createStore(rootreducer)