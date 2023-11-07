import { emailValidation } from "../formValidation/emailValidation";
import { passwordValidation } from "../formValidation/passwordValidation";
import { passwordConfirmValidation } from "../formValidation/passwordConfirmValidation";
import { userInst } from "../../models/User";

export async function handleSignUp(email: string, password: string, passwordConfirm: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,
    setPasswordConfirmError: (error: string) => void,
    setErrorMessage: (error: string) => void,
    setIsAuthenticated: (authState: boolean) => void) {

    const { emailIsValid, emailErrorMessage } = emailValidation(email);
    setEmailError(emailErrorMessage);
    const { passwordIsValid, passwordErrorMessage } = passwordValidation(password);
    setPasswordError(passwordErrorMessage);
    const { passwordConfirmIsValid, passwordConfirmErrorMessage } = passwordConfirmValidation(password, passwordConfirm);
    setPasswordConfirmError(passwordConfirmErrorMessage);
    
    if (!emailIsValid || !passwordIsValid || !passwordConfirmIsValid) {
        return;
    }
    const { errorMessage, authStatus } = await userInst.signUp(email, password);
    setErrorMessage(errorMessage);
    setIsAuthenticated(authStatus);
}