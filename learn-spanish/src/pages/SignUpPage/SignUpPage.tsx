import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormEmail } from "../../components/AuthForm/FormEmail";
import { FormPassword } from "../../components/AuthForm/FormPassword";
import { FormButton } from "../../components/AuthForm/FormButton";
import { FormPasswordConfirm } from "../../components/AuthForm/FormPassWordConfirm";
import { passwordValidation } from '../../controllers/formValidation/passwordValidation';
import { passwordConfirmValidation } from '../../controllers/formValidation/passwordConfirmValidation';
import { emailValidation } from '../../controllers/formValidation/emailValidation';
import { userInst } from '../../models/user';

interface SignUpPageProps {
    setIsAuthenticated: (authState: boolean) => void;
}

export const SignUpPage = ({ setIsAuthenticated }: SignUpPageProps) => {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [passwordConfirmError, setPasswordConfirmError] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const hideRules:boolean = false;
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const emailValidationResult = emailValidation(email, setEmailError);
        const passwordValidationResult = passwordValidation(password, setPasswordError);
        const passwordConfirmValidationResult = passwordConfirmValidation(password, passwordConfirm, setPasswordConfirmError);
        if (!emailValidationResult || !passwordValidationResult || !passwordConfirmValidationResult) {
            return;
        } else {
            userInst.signUp(email, password, setErrorMessage, setIsAuthenticated);
        }
    }

    const errorClass: string = errorMessage !== "" ? 'error-message' : 'hidden';

    return (
        <main className="main">
            <div className='auth-container flex-column-center'>
                <p className='auth-message'>Please sign up.</p>
                <p>Already have an account? <Link to='/login'>Log in</Link> now.</p>
                <div className='form-container'>
                    <form className='authForm flex-column-center' onSubmit={handleSubmit}>
                        <FormEmail value={email} onChange={setEmail} emailError={emailError}/>
                        <FormPassword value={password} onChange={setPassword} shouldHideRules={hideRules} passwordError={passwordError}/>
                        <FormPasswordConfirm value={passwordConfirm} onChange={setPasswordConfirm} passwordConfirmError={passwordConfirmError}/>
                        <FormButton />
                        <div className={errorClass}>{errorMessage}</div>
                    </form>
                </div>
            </div>
        </main>
    );
}
