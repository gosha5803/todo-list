import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo, ITodos, TodoStatus } from "../types/todo-types";

export const initialState: ITodos = {
    todos: [],
    isLoading: false,
    err: null,
    maxPage: 0
}

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        fetchTodosStarted: (state: ITodos) => {
            state.isLoading = true
        },
        fetchTodoSuccess: (state: ITodos, action: PayloadAction<ITodo[]>) => {
            state.isLoading = false
            state.todos = state.todos.concat(action.payload)
        },
        fetchTodoError: (state: ITodos, action: PayloadAction<string>) => {
            state.isLoading = false
            state.err = action.payload
        },
        setMaxPage: (state: ITodos, action: PayloadAction<number>) => {
            state.maxPage = action.payload
        },
        changeTodoStatusSuccess: (state: ITodos, action: PayloadAction<{id: string, newStatus: TodoStatus}>) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo.status = action.payload.newStatus
                    return todo
                }
                return todo
            })
            state.isLoading = false
        },
        removeTodoSuccess: (state: ITodos, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        setTodos: (state: ITodos, action: PayloadAction<ITodo[]>) => {
            state.isLoading = false
            state.todos = action.payload
        },
        addNewTodo: (state: ITodos, action: PayloadAction<ITodo>) => {
            state.todos = [action.payload, ...state.todos]
        }
    }
})

export const { actions: {
    fetchTodosStarted, 
    fetchTodoSuccess, 
    fetchTodoError, 
    setMaxPage, 
    changeTodoStatusSuccess, 
    removeTodoSuccess, 
    setTodos, 
    addNewTodo 
}, reducer: todosReducer } = todosSlice
