import { HttpResponse, HttpRequest} from "../protocols/http"
import { MissingParamError } from "../errors/missing-param-errors"
import { badRequest } from "../helpers/http-helper"
import { Controller } from "../protocols/controllers"

export class SignUpController implements Controller {
    handle (httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.name) {
            return  badRequest(new MissingParamError("name"))
            
        }
        if (!httpRequest.body.email) {
            return  badRequest(new MissingParamError("email"))
        }
        const requiredFields = ["name", "email"]
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return  badRequest(new MissingParamError(field))
                
            }
        }
    }
}