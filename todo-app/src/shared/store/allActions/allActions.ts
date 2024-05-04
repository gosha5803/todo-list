import { changeTodoStatus, createTodo, fetchTodos, getTodoByTitle, removeTodo } from "enteties/todo/model/state/todos-async-actions";
import { setMaxPage, setTodos } from "enteties/todo/model/state/todos-slice";

export const allActions = {
    setTodos,
    createTodo,
    getTodoByTitle,
    removeTodo,
    fetchTodos,
    setMaxPage,
    changeTodoStatus
}