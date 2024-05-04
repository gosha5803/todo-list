import { TodoStatus } from "enteties/todo/model/types/todo-types";
import { useActions } from "shared/hooks/redux/useTypedSelector";

export const changeTodoStatusArgs = (status: TodoStatus, todoId: string) => {
    const { changeTodoStatus } = useActions()

    return {
        title: status,
        action: () => {
            changeTodoStatus(todoId, status)
        }
    }
}