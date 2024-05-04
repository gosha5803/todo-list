import type { TodoStatus } from "enteties/todo/model/types/todo-types"

export interface ChangeTodoStatusProps {
    className?: string
    currentValue: TodoStatus
    todoId: string
}
