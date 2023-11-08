import { emailValidation } from "../formValidation/emailValidation";
import { passwordValidation } from "../formValidation/passwordValidation";
import { passwordConfirmValidation } from "../formValidation/passwordConfirmValidation";
import { userInst } from "../../models/user";

interface EmailValidationResult {
    emailIsValid: boolean;
    emailErrorMessage: string;
}

interface PasswordValidationResult {
    passwordIsValid: boolean;
    passwordErrorMessage: string;
}

interface PasswordConfirmValidationResult {
    passwordConfirmIsValid: boolean;
    passwordConfirmErrorMessage: string;
}

interface SingUpResult {
    errorMessage: string;
    authStatus: boolean;
}

export async function handleSignUp(email: string, password: string, passwordConfirm: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,
    setPasswordConfirmError: (error: string) => void,
    setErrorMessage: (error: string) => void,
    setIsAuthenticated: (authState: boolean) => void) {

    const { emailIsValid, emailErrorMessage }: EmailValidationResult = emailValidation(email);
    setEmailError(emailErrorMessage);
    const { passwordIsValid, passwordErrorMessage }: PasswordValidationResult = passwordValidation(password);
    setPasswordError(passwordErrorMessage);
    const { passwordConfirmIsValid, passwordConfirmErrorMessage }: PasswordConfirmValidationResult = passwordConfirmValidation(password, passwordConfirm);
    setPasswordConfirmError(passwordConfirmErrorMessage);
    
    if (!emailIsValid || !passwordIsValid || !passwordConfirmIsValid) {
        return;
    }
    const { errorMessage, authStatus }: SingUpResult = await userInst.signUp(email, password);
    setErrorMessage(errorMessage);
    setIsAuthenticated(authStatus);
}