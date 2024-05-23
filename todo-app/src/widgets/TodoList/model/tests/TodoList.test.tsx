import { initialState } from "enteties/todo/model/state/todos-slice";
import { $api } from "shared/api";
import { renderWithState } from "shared/lib/tests/testHelpers";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TodoList } from "widgets/TodoList/ui/TodoList";

var $apiSpy = vi.spyOn($api, 'get')

describe('Todo list', () => {

    beforeEach(() => {
        renderWithState(<TodoList/>, {todosReducer: initialState})
    })
    
    it('Should call $api once on mountning', () => {
        expect($apiSpy).toBeCalledTimes(1)
    })
})