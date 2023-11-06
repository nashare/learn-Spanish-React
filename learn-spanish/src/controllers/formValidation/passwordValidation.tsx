export function passwordValidation(password: string, setPasswordError: (error: string) => void): boolean {
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])(?=.{8,})/;
    const validationRes = passwordRegex.test(password);
    if (!validationRes) {
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
    else {
        setPasswordError("");
    }
    return validationRes;
}