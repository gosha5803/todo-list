import { describe, it, expect, beforeAll } from "vitest";
import { getIsLoading, getTodos } from "../../state/selectors/todoSelectors";
import { initialState } from "../../state/todos-slice";
import type { ITodo } from "../../types/todo-types";
import type { AppStore } from "shared/store";

describe('Todos Selectors', () => {
    var appInitialState:AppStore

    beforeAll(() => {
        appInitialState = {todosReducer: initialState}
    })

    it('Shoul return initial todos value', () => {
        expect(getTodos(appInitialState)).toEqual([])
    })

    it('Should return filled value of todos', () => {
        var fakeTodos:ITodo[] = [{title: 'Any', 'deadline': 1, 'id': '1', 'status': 'В работе'}]
        expect(getTodos({
            todosReducer: {
                todos: [...fakeTodos, ...fakeTodos],
                isLoading: false, 
                err: '',
                maxPage: 0
            }
        }))
            .toEqual([...fakeTodos, ...fakeTodos])
    })

    it('Should return isLoading field of a state', () => {
        expect(getIsLoading(appInitialState)).toBe(!true)
        expect(getIsLoading({todosReducer: {...appInitialState.todosReducer, isLoading: true}})).toBe(true)
    })
})