import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo, ITodoProto } from "enteties/todo/model/types/todo-types";
import { API_CONSTANTS } from "shared/api/constants/api-constants";

export const todoListApi = createApi({
    reducerPath: 'todoList',
    baseQuery: fetchBaseQuery({baseUrl: API_CONSTANTS.BASE_URL + API_CONSTANTS.TODOS}),
    tagTypes: ['todos'],
    endpoints: build => ({
        getTodos: build.query<ITodo[], void>({
            query: () => ({
                url:''
            }),
            providesTags: ['todos']
        }),
        addTodo: build.mutation<ITodo[], ITodoProto>({
            query: (todo: ITodoProto) => ({
                method: 'POST',
                url: '',
                body: todo
            }),
            invalidatesTags: ['todos']
        }),
        removeTodo: build.mutation<ITodo[], string>({
            query: (id: string) => ({
                method: 'DELETE',
                url: '/' + id
            }),
            invalidatesTags: ['todos']
        }),
        changeTodoStatus: build.mutation<ITodo[], {status: string, id: string}>({
            query: ({status, id}) => ({
                method: 'PATCH',
                url: '/' + id,
                body: {
                    status
                }
            }),
            invalidatesTags: ['todos']
        })
    })
})

export const { useGetTodosQuery, reducer: todosReducer, useAddTodoMutation, useRemoveTodoMutation, useChangeTodoStatusMutation } = todoListApi