import { act, fireEvent, screen } from "@testing-library/react";
import { initialState } from "enteties/todo/model/state/todos-slice";
import { ChangeTodoStatus } from "features/changeTodoStatus/ui/ChangeTodoStatus";
import { $api } from "shared/api";
import { renderWithState } from "shared/lib/tests/testHelpers";
import { describe, it, vi , expect, beforeEach } from "vitest";

describe('Change todo status', () => {
    var menuButton: HTMLElement
    var queryTodoStatus: () => HTMLElement | null

    beforeEach(() => {
        queryTodoStatus = () => screen.queryByTestId('menu-item1')
        renderWithState(<ChangeTodoStatus todoId="1" currentValue={'В работе'}/>, {todosReducer: initialState})
        menuButton = screen.getByTestId('my-menu-btn')
    })

    it('should mount statusItem in document', () => {
        expect(menuButton).toBeInTheDocument()
        expect(queryTodoStatus()).not.toBeInTheDocument()
        
        act(() => {
            fireEvent.click(menuButton)
        })
        expect(queryTodoStatus()).toBeInTheDocument()
    })
    
    it('should call api patch by click on menuItem', () => {
        var $apiSpy = vi.spyOn($api, 'patch')
        
        expect($apiSpy).toBeCalledTimes(0)
        
        act(() => {
            fireEvent.click(menuButton)
        })

        act(() => {
            var menuItem = queryTodoStatus()
            if(menuItem){
                fireEvent.click(menuItem)
            }
        })

        expect($apiSpy).toBeCalledTimes(1)
    })

})