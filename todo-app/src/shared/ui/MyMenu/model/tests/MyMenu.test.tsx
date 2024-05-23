import { act, fireEvent, render } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { MyMenu } from "../../ui/MyMenu";

describe('MyMenu tests', () => {
    it('Should show element in dropdown', () => {
        var { getByTestId, queryByTestId } = render(<MyMenu menuButton={{
            color: 'error',
            children: 'currentValue',
            variant: 'contained',
        }} menuItems={[{action: () => {}, title: 'Тестовый колбек'}]}/>)
        var menuBtn = getByTestId('my-menu-btn')
        var getFirstItem = () => queryByTestId('menu-item0')
        
        expect(getFirstItem()).not.toBeInTheDocument()
        act(() => {
            fireEvent.click(menuBtn)
        })
        expect(getFirstItem()).toBeInTheDocument()
    })
    
    it('Should call callback', () => {
        var spyCallback = vi.fn(() => {})
        var { getByTestId, queryByTestId } = render(<MyMenu menuButton={{
            color: 'error',
            children: 'currentValue',
            variant: 'contained',
        }} menuItems={[{action: spyCallback, title: 'Тестовый колбек'}]}/>)
        var menuBtn = getByTestId('my-menu-btn')
        var getFirstItem = () => queryByTestId('menu-item0')

        expect(getFirstItem()).not.toBeInTheDocument()
        act(() => {
            fireEvent.click(menuBtn)
        })

        expect(spyCallback).toBeCalledTimes(0)
        act(() => {
            var menuItem = getFirstItem()
            if(menuItem) {
                fireEvent.click(menuItem)
                fireEvent.click(menuItem)
            }
        })
        expect(spyCallback).toBeCalledTimes(2)
    })
})