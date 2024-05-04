import { useCallback, useRef } from "react"

export const debounce = (callback: any, delay: number) => {
    const timer = useRef<null | Timer>(null)

    const debouncedCallBack = useCallback((...args: any) => {
        if(timer.current) {
            clearTimeout(timer.current)
        }
    
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallBack
}