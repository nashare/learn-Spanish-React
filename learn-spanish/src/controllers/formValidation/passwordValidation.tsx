import { showPasswordErrorMessage } from "./showPasswordErrorMessage";

interface ValidationResult {
    passwordIsValid: boolean;
    passwordErrorMessage: string;
}

export function passwordValidation(password: string): ValidationResult {
    const passwordRegex: RegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])(?=.{8,})/;
    const passwordIsValid: boolean = passwordRegex.test(password);
    let passwordErrorMessage: string = "";
    if (!passwordIsValid) {
        passwordErrorMessage = showPasswordErrorMessage(password, passwordErrorMessage);
    }
    return { passwordIsValid, passwordErrorMessage };
}