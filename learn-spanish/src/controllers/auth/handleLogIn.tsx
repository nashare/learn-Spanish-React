import { emailValidation } from "../formValidation/emailValidation";
import { passwordValidation } from "../formValidation/passwordValidation";
import { userInst } from "../../models/User";

export async function handleLogIn(email: string, password: string, 
    setEmailError: (error: string) => void, 
    setPasswordError: (error: string) => void, 
    setErrorMessage: (error: string) => void, 
    setIsAuthenticated: (authState: boolean) => void): Promise<undefined> {
    
    const { emailIsValid, emailErrorMessage } = emailValidation(email);
    setEmailError(emailErrorMessage);
    const { passwordIsValid, passwordErrorMessage } = passwordValidation(password);
    setPasswordError(passwordErrorMessage);
    if (!emailIsValid || !passwordIsValid) {
        return;
    }
    const { errorMessage, authStatus} = await userInst.logIn(email, password);
    setErrorMessage(errorMessage);
    setIsAuthenticated(authStatus);
}