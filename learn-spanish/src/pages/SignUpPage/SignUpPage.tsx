import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const hideRules:boolean = false;
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (!emailValidation(email) || !passwordValidation(password) || !passwordConfirmValidation(password, passwordConfirm)) {
            return;
        } else {
            try {
                userInst.signUp(email, password);
                setIsAuthenticated(userInst.isAuthenticated);
                navigate('/categories');
            } catch (error) {
                
            }
        }
    }
    return (
        <main className="main">
            <div className='auth-container flex-column-center'>
                <p className='auth-message'>Please sign up.</p>
                <p>Already have an account? <Link to='/login'>Log in</Link> now.</p>
                <div className='form-container'>
                    <form className='authForm flex-column-center' onSubmit={handleSubmit}>
                        <FormEmail value={email} onChange={setEmail} />
                        <FormPassword value={password} onChange={setPassword} shouldHideRules={hideRules} />
                        <FormPasswordConfirm value={passwordConfirm} onChange={setPasswordConfirm} />
                        <FormButton />
                    </form>
                </div>
            </div>
        </main>
    );
}
