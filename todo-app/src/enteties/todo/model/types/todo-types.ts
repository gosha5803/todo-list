export interface ITodoProto {
    title: string
    status: TodoStatus
    deadline?: number
}
export interface ITodo extends ITodoProto{
    id: string
}

export interface ITodos {
    todos: ITodo[]
    isLoading: boolean
    err: string | null
    maxPage: number
}

export interface TodosLimitedResponse {
    data: ITodo[]
    pages: number
}

export type TodoStatus = 'Не в работе' | 'В работе' | 'Завершена'