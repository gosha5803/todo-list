import { $api } from "shared/api";
import { API_CONSTANTS } from "shared/api/constants/api-constants";
import { AppDispatch } from "shared/store";
import { ITodo, ITodoProto, TodoStatus } from "../types/todo-types";
import { addNewTodo, changeTodoStatusSuccess, fetchTodoError, fetchTodoSuccess, fetchTodosStarted, removeTodoSuccess, setMaxPage, setTodos } from "./todos-slice";
import type { TodosLimitedResponse } from "../types/todo-types";

const { TODOS } = API_CONSTANTS

export const fetchTodos = (page: number) => (dispatch: AppDispatch) => {
    const url = TODOS + `?_per_page=10&_page=${page}`

    dispatch(fetchTodosStarted())
    $api.get<TodosLimitedResponse>(url)
    .then(response => {
        dispatch(setMaxPage(response.data.pages))
        dispatch(fetchTodoSuccess(response.data.data))
    })
    .catch(() => dispatch(fetchTodoError('Ошибка')))
    
}

export const changeTodoStatus = (todoId: string, status: TodoStatus) => (dispatch: AppDispatch) => {
    const url = TODOS + '/' + todoId
    
    $api.patch(url, {status})
    .then(() => {dispatch(changeTodoStatusSuccess({id: todoId, newStatus: status}))})
}

export const removeTodo = (todoId: string) => (dispatch: AppDispatch) => {
    const url = TODOS + '/' + todoId
    
    $api.delete(url)
    .then(() => dispatch(removeTodoSuccess(todoId)))
}

export const getTodoByTitle = (todoTitle: string) => (dispatch: AppDispatch) => {
    const url = TODOS + '?title=' + todoTitle
    
    $api.get<ITodo[]>(url)
    .then(response =>dispatch(setTodos(response.data)))
}

export const createTodo = (todoProto: ITodoProto) => (dispatch: AppDispatch) => {
    const url = TODOS

    $api.post<ITodo>(url, todoProto)
        .then((response) => {
            dispatch(addNewTodo(response.data))
        })
}