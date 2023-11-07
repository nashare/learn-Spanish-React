export function showPasswordErrorMessage(password: string, passwordErrorMessage: string): string {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const digitsRegex = /\d/;
    const specialSymbRegex = /[^A-Za-z\d]/;
    if (password.length < 8) {
        passwordErrorMessage = "Less than 8 characters";
    } else if (!upperCaseRegex.test(password)) {
        passwordErrorMessage = "Add an uppercase letter";
    } else if (!lowerCaseRegex.test(password)) {
        passwordErrorMessage = "Add a lowercase letter";
    } else if (!digitsRegex.test(password)) {
        passwordErrorMessage = "Add a digit";
    } else if (!specialSymbRegex.test(password)) {
        passwordErrorMessage = "Add a special symbol";
    }
    return passwordErrorMessage;
}