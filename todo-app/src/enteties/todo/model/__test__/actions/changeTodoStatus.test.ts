import { describe, expect, it } from "vitest";
import { changeTodoStatusSuccess, initialState, todosReducer } from "../../state/todos-slice";
import type { ITodo, TodoStatus } from "../../types/todo-types";

describe('Change todo status', () => {
    it('Should set recieved status to target todo', () => {
        var fakeTodo:ITodo = {title: 'Задача', 'deadline': 22, 'id': '22', 'status': 'В работе'}
        var newStatus:TodoStatus = 'Завершена'

        var updatedState = todosReducer({ ...initialState, todos: [fakeTodo], isLoading: true }, { type: 'unknown' })
        expect(updatedState.todos[0].status).toBe(fakeTodo.status) 
        
        updatedState = todosReducer(updatedState, changeTodoStatusSuccess({id: fakeTodo.id, newStatus}))
        expect(updatedState.todos[0].status).toBe(newStatus)
        expect(updatedState.isLoading).toBe(false)
    })
})