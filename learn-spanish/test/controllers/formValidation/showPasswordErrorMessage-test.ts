import { showPasswordErrorMessage } from "../../../src/controllers/formValidation/showPasswordErrorMessage";

describe('showPasswordErrorMessage', () => {
    const testCases = [
        {
            password: 'Password111!',
            message: '',
            expected: '',
            description: 'correct passwords'
        },
        {
            password: 'pass',
            message: '',
            expected: "Less than 8 characters",
            description: 'passwords with less than 8 characters'
        },
        {
            password: 'password111!',
            message: '',
            expected: "Add an uppercase letter",
            description: 'passwords without an uppercase letter'
        },
        {
            password: '111!PASSWORD',
            message: '',
            expected: "Add a lowercase letter",
            description: 'passwords without a lowercase letter'
        },
        {
            password: 'PASSa!PASSWORD',
            message: '',
            expected: "Add a digit",
            description: 'passwords without a digit'
        },
        {
            password: 'aPASSWORD5',
            message: '',
            expected: "Add a special symbol",
            description: 'passwords without a special symbol'
        },
    ];

    test.each(testCases)('should return $expected for $description', ({ password, message, expected }) => {
        const output = showPasswordErrorMessage(password, message);
        expect(output).toStrictEqual(expected);
    });
});