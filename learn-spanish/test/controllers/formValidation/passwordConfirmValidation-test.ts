import { passwordConfirmValidation } from "../../../src/controllers/formValidation/passwordConfirmValidation";

describe('passwordConfirmValidation', () => {
    const testCases = [
        { password1: 'Test12345', password2: 'Test12345', expected: { "passwordConfirmErrorMessage": "", "passwordConfirmIsValid": true }, description: 'two equal passwords' },
        { password1: 'Test12345', password2: 'Test123456', expected: { "passwordConfirmErrorMessage": "Passwords do not match.", "passwordConfirmIsValid": false }, description: 'two different passwords' },
    ];

    test.each(testCases)('should return $expected for $description', ({ password1, password2, expected }) => {
        const output = passwordConfirmValidation(password1, password2);
        expect(output).toStrictEqual(expected);
    });
});