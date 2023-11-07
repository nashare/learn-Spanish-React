import { emailValidation } from "../../../src/controllers/formValidation/emailValidation";

describe('emailValidation', () => {
    const testCases = [
        { email: 'test@test.com', expected: { emailIsValid: true, emailErrorMessage: "" }, description: 'correct email' },
        { email: 'a@a.a', expected: { emailIsValid: false, emailErrorMessage: "Please enter a valid email." }, description: 'wrong email' },
    ];

    test.each(testCases)('should return $expected for $description', ({ email, expected }) => {
        const output = emailValidation(email);
        expect(output).toStrictEqual(expected);
    });
});