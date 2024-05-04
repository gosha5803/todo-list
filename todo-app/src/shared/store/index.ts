import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "enteties/todo/model/state/todos-slice";

const rootReducer = combineReducers({
    todosReducer
})

export const store = configureStore({
    reducer: rootReducer,
})


export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch