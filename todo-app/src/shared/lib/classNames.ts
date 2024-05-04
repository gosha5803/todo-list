export const classNames = (cls: string, dynamic: Record<string, boolean>, additional: Array<string | undefined>):string => {
    return [
        cls,
        ...Object.entries(dynamic).map(([key, value]) => value ? key : ''),
        ...additional.map(el => !!el ? el : '')
    ].join(' ')
}