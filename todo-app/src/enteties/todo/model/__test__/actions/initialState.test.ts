import { describe, expect, it } from 'vitest'
import { todosReducer, initialState } from '../../state/todos-slice'

describe('Todos state', () => {
    it('Check initial state', () => {
        var state = todosReducer(undefined, {type: 'unknown'})

        expect(state).toEqual(initialState)
    })
})