import { SignUpController } from "./signup"

const makeSut = (): SignUpController => {
    return new SignUpController()
}

describe("SignUp Controller", () => {
    test("should return 400 if no name is provided", () => {
        const sut = makeSut()
        const httpRequest = {
            body: {
                email: "any_email@email.com",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }
       const httpResponse =  sut.handle(httpRequest)
       expect(httpResponse.statusCode).toBe(400)
       expect(httpRequest.body).toEqual(new Error("Missing param: email"))
    })
})