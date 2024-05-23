import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { todosReducer } from "enteties/todo/model/state/todos-slice";
const rootReducer = combineReducers({
    todosReducer
})

export const createStore = (initialState = {}) => configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})

export const store = createStore()


export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch

