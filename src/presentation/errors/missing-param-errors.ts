export class MissingParamError extends Error {
    constructor (paramName: Error) {
    super (`missing param: ${paramName}`)
    this.name = "missingParamError"
    }
}