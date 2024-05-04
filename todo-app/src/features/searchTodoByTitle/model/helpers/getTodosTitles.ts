import { ITodo } from "enteties/todo/model/types/todo-types";

export const getTodosTitles = (todos: ITodo[]): string[] => todos.map(todo =>  todo.title)

export const sortTodos = (todos: ITodo[], selectedTitle: string):ITodo[] => todos.sort(todo => todo.title === selectedTitle ? -1 : 1)