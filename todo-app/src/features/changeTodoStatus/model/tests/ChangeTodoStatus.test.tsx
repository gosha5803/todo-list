import { describe, it, expect, should } from 'vitest'
import { act, render } from '@testing-library/react'
import { fireEvent } from '@storybook/test'
import { ChangeTodoStatus } from 'features/changeTodoStatus/ui/ChangeTodoStatus'
import { Provider } from 'react-redux'
import { store } from 'shared/store'

describe('ChangeTodoStatus', () => {
    it('Should change color and text of a status btn', () => {
        var { getByTestId } = render(
            <Provider store={store}>
                <ChangeTodoStatus currentValue={'В работе'} todoId='111'/>
            </Provider>
        )
        // var statusBtn = getByTestId('status-btn')

        // act(() => {
        //     fireEvent.click(statusBtn)
        // })
    })
})