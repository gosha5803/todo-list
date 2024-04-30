export const classNames = (cls: string, dynamic: Record<string, boolean>, additional: Array<string | undefined>):string => {
    return [
        cls,
        ...additional.map(el => !!el ? el : '')
    ].join(' ')
}