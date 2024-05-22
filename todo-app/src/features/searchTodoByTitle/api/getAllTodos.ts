import { ITodo } from "enteties/todo/model/types/todo-types"
import { $api } from "shared/api"
import { API_CONSTANTS } from "shared/api/constants/api-constants"

export const getMatchingTodos = (inputValue: string): Promise<ITodo[]> => {
    return $api.get('' + API_CONSTANTS.TODOS)
        .then(response => response.data)
        .then((todos: ITodo[]) => todos.filter(todo => todo.title.match(inputValue)))
}