export default function parseId(location: string) {
    const parts = location.split('/');
    const lastPart = parts.pop();

    if (lastPart && !isNaN(Number(lastPart))) {
        return Number(lastPart);
    } else {
        throw Error(`Can't parse url ${location}`);
    }
}