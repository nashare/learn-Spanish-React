import { emailValidation } from "../formValidation/emailValidation";
import { passwordValidation } from "../formValidation/passwordValidation";
import { userInst } from "../../models/user";

interface EmailValidationResult {
    emailIsValid: boolean;
    emailErrorMessage: string;
}

interface PasswordValidationResult {
    passwordIsValid: boolean;
    passwordErrorMessage: string;
}

interface LogInResult {
    errorMessage: string;
    authStatus: boolean;
}


export async function handleLogIn(email: string, password: string, 
    setEmailError: (error: string) => void, 
    setPasswordError: (error: string) => void, 
    setErrorMessage: (error: string) => void, 
    setIsAuthenticated: (authState: boolean) => void): Promise<undefined> {
    
    const { emailIsValid, emailErrorMessage }: EmailValidationResult = emailValidation(email);
    setEmailError(emailErrorMessage);
    const { passwordIsValid, passwordErrorMessage }: PasswordValidationResult = passwordValidation(password);
    setPasswordError(passwordErrorMessage);
    if (!emailIsValid || !passwordIsValid) {
        return;
    }
    const { errorMessage, authStatus }: LogInResult = await userInst.logIn(email, password);
    setErrorMessage(errorMessage);
    setIsAuthenticated(authStatus);
}