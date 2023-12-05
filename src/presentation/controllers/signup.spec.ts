import { SignUpController } from "./signup"

describe("SignUp Controller", () => {
    test("should return 400 if no name is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: "any_name",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }
       const httpResponse =  sut.handle(httpRequest)
       expect(httpResponse.statusCode).toBe(400)
       expect(httpRequest.body).toEqual(new Error("Missing param: email"))
    })
})