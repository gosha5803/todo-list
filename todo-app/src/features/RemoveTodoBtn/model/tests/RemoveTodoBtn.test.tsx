import { act, fireEvent } from "@testing-library/react";
import { initialState } from "enteties/todo/model/state/todos-slice";
import type { ITodo } from "enteties/todo/model/types/todo-types";
import { RemoveTodoBtn } from "features/RemoveTodoBtn/ui/RemoveTodoBtn";
import { $api } from "shared/api";
import { renderWithState } from "shared/lib/tests/testHelpers";
import { describe, expect, it, vi } from "vitest";

describe('Remove todo btn', () => {
    it('Should call $api delete', () => {
        var fakeTodo:ITodo = {title: 'Any', 'deadline': 1, 'id': '1', 'status': 'В работе'}
        var { getByTestId } = renderWithState(<RemoveTodoBtn todoId='1'/>, {todosReducer: {...initialState, todos: [fakeTodo]}})
        var removeBtn = getByTestId('remove-btn')
        var $apiSpy = vi.spyOn($api, 'delete')

        act(() => {
            fireEvent.click(removeBtn)
        })

        expect($apiSpy).toBeCalledTimes(1)
    })
})