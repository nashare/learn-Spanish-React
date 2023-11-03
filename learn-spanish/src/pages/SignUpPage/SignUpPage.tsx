import { Link } from "react-router-dom";
import { FormEmail } from "../../components/AuthForm/FormEmail";
import { FormPassword } from "../../components/AuthForm/FormPassword";
import { FormButton } from "../../components/AuthForm/FormButton";

export const SignUpPage = () => {
    const hideRules:boolean = false;
    return (
        <main className="main">
            <div className='auth-container flex-column-center'>
                <p className='auth-message'>Please sign up.</p>
                <p>Already have an account? <Link to='/login'>Log in</Link> now.</p>
                <div className='form-container'>
                    <form className='authForm flex-column-center' action='/submit' method='post'>
                        <FormEmail />
                        <FormPassword shouldHideRules={hideRules} />
                        <FormButton />
                    </form>
                </div>
            </div>
        </main>
    );
}
