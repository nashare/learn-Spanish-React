interface ValidationResult {
    emailIsValid: boolean;
    emailErrorMessage: string;
}

export function emailValidation(email: string): ValidationResult {
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailIsValid: boolean = emailRegex.test(email);
    let emailErrorMessage: string = "";
    if (!emailIsValid) {
        emailErrorMessage = "Please enter a valid email.";
    }
    return { emailIsValid, emailErrorMessage };
}