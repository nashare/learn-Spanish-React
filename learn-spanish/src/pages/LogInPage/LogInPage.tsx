import "./LogInPage.css";
import { Link } from "react-router-dom";
import { FormEmail } from "../../components/AuthForm/FormEmail";
import { FormPassword } from "../../components/AuthForm/FormPassword";
import { FormPasswordConfirm } from "../../components/AuthForm/FormPassWordConfirm";
import { FormButton } from "../../components/AuthForm/FormButton";

export const LogInPage = () => {
    const hideRules: boolean = true;
    return (
        <main className="main">
            <div className='auth-container flex-column-center'>
                <p className='auth-message'>Please log in.</p>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link> now.</p>
                <div className='form-container'>
                    <form className='authForm flex-column-center' action='/submit' method='post'>
                        <FormEmail />
                        <FormPassword shouldHideRules={hideRules} />
                        <FormPasswordConfirm />
                        <FormButton />
                    </form>
                </div>
            </div>
        </main>
    );
}
