export function passwordErrorMessage(password: string, setPasswordError: (error: string) => void): void {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const digitsRegex = /\d/;
    const specialSymbRegex = /[^A-Za-z\d]/;
    if (password.length < 8) {
        setPasswordError("Less than 8 characters");
    } else if (!upperCaseRegex.test(password)) {
        setPasswordError("Add an uppercase letter")
    } else if (!lowerCaseRegex.test(password)) {
        setPasswordError("Add a lowercase letter")
    } else if (!digitsRegex.test(password)) {
        setPasswordError("Add a digit")
    } else if (!specialSymbRegex.test(password)) {
        setPasswordError("Add a special symbol")
    }
}