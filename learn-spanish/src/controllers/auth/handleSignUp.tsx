import { emailValidation } from "../formValidation/emailValidation";
import { passwordValidation } from "../formValidation/passwordValidation";
import { passwordConfirmValidation } from "../formValidation/passwordConfirmValidation";
import { userInst } from "../../models/user";

export function handleSignUp(email: string, password: string, passwordConfirm: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,
    setPasswordConfirmError: (error: string) => void,
    setErrorMessage: (error: string) => void,
    setIsAuthenticated: (authState: boolean) => void): void {

    const emailValidationResult: boolean = emailValidation(email, setEmailError);
    const passwordValidationResult: boolean = passwordValidation(password, setPasswordError);
    const passwordConfirmValidationResult: boolean = passwordConfirmValidation(password, passwordConfirm, setPasswordConfirmError);
    if (!emailValidationResult || !passwordValidationResult || !passwordConfirmValidationResult) {
        return;
    } else {
        userInst.signUp(email, password, setErrorMessage, setIsAuthenticated);
    }
}