export function emailValidation(email: string, setEmailError: (error: string) => void): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validationRes = emailRegex.test(email);
    if (!validationRes) {
        setEmailError("Please enter a valid email.");
    } else {
        setEmailError("");
    }
    return validationRes;
}