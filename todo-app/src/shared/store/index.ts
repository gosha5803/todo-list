import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoListApi, todosReducer } from "widgets/TodoList/api/todoListApi";

const rootReducer = combineReducers({
    [todoListApi.reducerPath]: todosReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return  getDefaultMiddleware().concat(todoListApi.middleware)
    },
})


export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch