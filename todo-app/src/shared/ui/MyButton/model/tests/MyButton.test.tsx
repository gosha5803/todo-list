import { act, fireEvent, getByTestId, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MyButton } from "../../ui/MyButton";

describe('My button tests', () => {
    it('Should call onCLick callback', () => {
        var callBackSpy = vi.fn()
        var { getByTestId } = render(<MyButton onClick={() => callBackSpy()}/>)
        var myBtn = getByTestId('my-btn')

        expect(callBackSpy).toBeCalledTimes(0)
        act(() => {
            fireEvent.click(myBtn)
        })

        expect(callBackSpy).toBeCalledTimes(1)
    })
})