export var debounce = (callback: any, delay: number) => {
   var timer: null | Timer = null

    return (...args: any) => {
        if(timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}