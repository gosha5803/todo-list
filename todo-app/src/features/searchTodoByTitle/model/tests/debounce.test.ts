import { describe, test, expect, vi, beforeEach } from 'vitest'
import { debounce } from '../helpers/debounce'

describe('Debounce helper', () => {
    var callBackSpy: () => {}
    var debouncedCallBack: () => void
    var debounceTimeout = 100
    var callDebounced: (delay: number) => Promise<void>

    beforeEach(() => {
        callBackSpy = vi.fn()
        debouncedCallBack = debounce(callBackSpy, debounceTimeout)
        callDebounced = (delay) => new Promise(resolve => {
            debouncedCallBack()
            setTimeout(() => {
                resolve()
            }, delay)
        })
    })

    test('Should be called onced with any number of sync calls', async() => {
        debouncedCallBack()
        debouncedCallBack()
        debouncedCallBack()
        await callDebounced(debounceTimeout + 1)
        expect(callBackSpy).toBeCalledTimes(1)
    })
    
    test('Shoul be called every time, than delay is more than debounce timeout', async() => {
        await callDebounced(debounceTimeout + 1)
        await callDebounced(debounceTimeout - 1)
        await callDebounced(debounceTimeout + 1)
        expect(callBackSpy).toBeCalledTimes(2)
    })
})