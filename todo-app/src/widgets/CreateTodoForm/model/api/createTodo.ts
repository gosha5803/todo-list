import { AxiosResponse } from "axios";
import { ITodo } from "enteties/todo/model/types/todo-types";
import { $api } from "shared/api";
import { API_CONSTANTS } from "shared/api/constants/api-constants";

export const createTodo = async(todo: ITodo):Promise<any> => {
    try {
        const response = await $api.post<Promise<AxiosResponse<ITodo[]>>>(API_CONSTANTS.TODOS, {
            title: todo.title
        })
        return await response.data
    } catch (error) {
        return error
    }
}