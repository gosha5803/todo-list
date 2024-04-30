import { ITodo } from "enteties/todo/model/types/todo-types";
import { ReactNode } from "react";

export interface ITodoListColumns extends ITodo{
    removeBtn: ReactNode
}