import { passwordErrorMessage } from "./passwordErrorMessage";

export function passwordValidation(password: string, setPasswordError: (error: string) => void): boolean {
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])(?=.{8,})/;
    const validationRes = passwordRegex.test(password);
    if (!validationRes) {
        passwordErrorMessage(password, setPasswordError);
    }
    else {
        setPasswordError("");
    }
    return validationRes;
}