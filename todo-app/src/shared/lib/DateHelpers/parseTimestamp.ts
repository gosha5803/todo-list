export const parseDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
}