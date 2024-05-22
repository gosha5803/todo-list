import { describe, it, expect } from 'vitest'
import { todosReducer, setMaxPage, initialState } from '../../state/todos-slice'

describe('SetMaxPage', () => {
    it('Should set recieved value to max page field', () => {
        var maxPage = 11
        var setMaxPageState = todosReducer(initialState, setMaxPage(maxPage))

        expect(setMaxPageState.maxPage).toBe(maxPage)
    })
})