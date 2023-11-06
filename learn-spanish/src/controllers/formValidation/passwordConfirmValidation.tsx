export function passwordConfirmValidation(password: string, passwordConfirm: string, setPasswordConfirmError: (error: string) => void): boolean {
    const validationRes = password === passwordConfirm;
    if (!validationRes) {
        setPasswordConfirmError("Passwords do not match.");
    } else {
        setPasswordConfirmError("");
    }
    return validationRes;
}