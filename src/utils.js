export function arrayToMap(arr) {
    return arr.reduce((acc, el) => ({
        ...acc, [el.id]: el
    }), {})
}

export function mapToArr(arr) {
    return Object.keys(arr).map(id => arr[id])
}