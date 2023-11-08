import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormEmail } from "../../components/AuthForm/FormEmail";
import { FormPassword } from "../../components/AuthForm/FormPassword";
import { FormButton } from "../../components/AuthForm/FormButton";
import { handleLogIn } from "../../controllers/auth/handleLogIn";
import "./LogInPage.css";

interface LogInPageProps {
    setIsAuthenticated: (authState: boolean) => void;
}

export const LogInPage = ({ setIsAuthenticated }: LogInPageProps): JSX.Element => {
    const hideRules: boolean = true;
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleLogIn(email, password,
            setEmailError, setPasswordError, setErrorMessage, setIsAuthenticated);
    }
    const errorClass: string = errorMessage !== "" ? 'error-message' : 'hidden';

    return (
        <main className="main">
            <div className='auth-container flex-column-center'>
                <p className='auth-message'>Please log in.</p>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link> now.</p>
                <div className='form-container'>
                    <form className='authForm flex-column-center' onSubmit={handleSubmit}>
                        <FormEmail value={email} onChange={setEmail} emailError={emailError} />
                        <FormPassword value={password} onChange={setPassword} shouldHideRules={hideRules} passwordError={passwordError}/>
                        <FormButton />
                        <div className={errorClass}>{errorMessage}</div>
                    </form>
                </div>
            </div>
        </main>
    );
}
