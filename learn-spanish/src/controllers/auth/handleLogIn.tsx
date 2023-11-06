import { emailValidation } from "../formValidation/emailValidation";
import { passwordValidation } from "../formValidation/passwordValidation";
import { userInst } from "../../models/user";

export function handleLogIn(email: string, password: string, 
    setEmailError: (error: string) => void, 
    setPasswordError: (error: string) => void, 
    setErrorMessage: (error: string) => void, 
    setIsAuthenticated: (authState: boolean) => void): void {
    
    const emailValidationResult: boolean = emailValidation(email, setEmailError);
    const passwordValidationResult: boolean = passwordValidation(password, setPasswordError);
    if (!emailValidationResult || !passwordValidationResult) {
        return;
    } else {
        userInst.logIn(email, password, setErrorMessage, setIsAuthenticated);
    }
}