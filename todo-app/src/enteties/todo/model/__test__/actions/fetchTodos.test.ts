import { beforeEach, describe, expect, it } from 'vitest'
import { todosReducer, initialState, fetchTodosStarted, fetchTodoSuccess, fetchTodoError } from '../../state/todos-slice'
import type { ITodo, ITodos } from '../../types/todo-types'

describe('Todos actions', () => {
    var fetchStartedState: ITodos

    beforeEach(() => {
        fetchStartedState = todosReducer(initialState, fetchTodosStarted())
    })

    it('Should set loading to true', () => {
        expect(initialState.isLoading).toBe(false)
        expect(fetchStartedState.isLoading).toBe(true)
    })
    
    it('Should set recieved todos and set isLoading to false', () => {
        var fakeTodos: ITodo[] = [{title: 'Any', 'deadline': 1, 'id': '1', 'status': 'В работе'}]
        var fetchSuccessState = todosReducer(fetchStartedState, fetchTodoSuccess(fakeTodos))

        expect(fetchSuccessState.isLoading).toBe(false)
        expect(fetchSuccessState.todos).toEqual(fakeTodos)
        expect(fetchSuccessState.todos).not.toEqual([])
    })

    it('Should set error and isLoading to false', () => {
        var errorMessage = 'Error'
        var fetchErrorState = todosReducer(fetchStartedState, fetchTodoError(errorMessage))

        expect(fetchErrorState.isLoading).not.toBe(true)
        expect(fetchErrorState.err).toBe(errorMessage)
    })
})