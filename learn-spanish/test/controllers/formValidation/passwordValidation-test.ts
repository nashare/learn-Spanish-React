import { passwordValidation } from "../../../src/controllers/formValidation/passwordValidation";

describe('passwordValidation', () => {
    const testCases = [
        {
            input: 'Password111!',
            expected: { passwordIsValid: true, passwordErrorMessage: "" },
            description: 'correct passwords'
        },
        {
            input: 'pass',
            expected: { passwordIsValid: false, passwordErrorMessage: "Less than 8 characters" }, 
            description: 'passwords with less than 8 characters'
        },
        {
            input: 'password111!',
            expected: { passwordIsValid: false, passwordErrorMessage: "Add an uppercase letter" },
            description: 'passwords without an uppercase letter'
        },
        {
            input: '111!PASSWORD',
            expected: { passwordIsValid: false, passwordErrorMessage: "Add a lowercase letter" },
            description: 'passwords without a lowercase letter'
        },
        {
            input: 'PASSa!PASSWORD',
            expected: { passwordIsValid: false, passwordErrorMessage: "Add a digit" },
            description: 'passwords without a digit'
        },
        {
            input: 'aPASSWORD5',
            expected: { passwordIsValid: false, passwordErrorMessage: "Add a special symbol" },
            description: 'passwords without a special symbol'
        },
    ];

    test.each(testCases)('should return $expected for $description', ({ input, expected }) => {
        const output = passwordValidation(input);
        expect(output).toStrictEqual(expected);
    });
});