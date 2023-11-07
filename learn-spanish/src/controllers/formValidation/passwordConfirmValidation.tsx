interface ValidationResult {
    passwordConfirmIsValid: boolean;
    passwordConfirmErrorMessage: string;
}

export function passwordConfirmValidation(password: string, passwordConfirm: string): ValidationResult {
    const passwordConfirmIsValid = password === passwordConfirm;
    let passwordConfirmErrorMessage: string = "";
    if (!passwordConfirmIsValid) {
        passwordConfirmErrorMessage = "Passwords do not match.";
    }
    return { passwordConfirmIsValid, passwordConfirmErrorMessage };
}