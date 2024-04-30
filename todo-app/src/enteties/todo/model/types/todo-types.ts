export interface ITodoProto {
    title: string
    status?: TodoStatus
    deadline?: number
}
export interface ITodo extends ITodoProto{
    id: string
}

export type TodoStatus = 'Не в работе' | 'В работе' | 'Завершена'