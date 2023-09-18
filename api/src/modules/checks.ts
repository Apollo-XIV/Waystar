


export function checkForProperties(properties: string[], body: any) {
    const result = properties
        .map((property) => eval(`body.${property}`))
        .some((x) => x === undefined)
    if (result === true) {
        throw Error("Invalid Body");
    }
    return;
}