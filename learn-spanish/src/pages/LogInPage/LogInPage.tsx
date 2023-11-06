import "./LogInPage.css";
import { Dispatch, SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormEmail } from "../../components/AuthForm/FormEmail";
import { FormPassword } from "../../components/AuthForm/FormPassword";
import { FormButton } from "../../components/AuthForm/FormButton";
import { passwordValidation } from '../../controllers/formValidation/passwordValidation';
import { emailValidation } from '../../controllers/formValidation/emailValidation';
import { User } from '../../models/user';

interface LogInPageProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

export const LogInPage = ({ user, setUser }: LogInPageProps) => {
    const hideRules: boolean = true;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (!emailValidation(email) || !passwordValidation(password)) {
            return;
        } else {
            try {
                user.logIn(email, password);
                console.log(user);
                setUser(user);
                navigate('/categories');
            } catch (error) {

            }
        }
    }
    return (
        <main className="main">
            <div className='auth-container flex-column-center'>
                <p className='auth-message'>Please log in.</p>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link> now.</p>
                <div className='form-container'>
                    <form className='authForm flex-column-center' onSubmit={handleSubmit}>
                        <FormEmail value={email} onChange={setEmail} />
                        <FormPassword value={password} onChange={setPassword} shouldHideRules={hideRules} />
                        <FormButton />
                    </form>
                </div>
            </div>
        </main>
    );
}
