import React from 'react';

interface FormPasswordProps {
    shouldHideRules: boolean;
}

export const FormPassword = ({ shouldHideRules }: FormPasswordProps) => {

    const authRulesClass:string = shouldHideRules ? 'auth-rules-hidden' : 'auth-rules';

    return (
        <div className='form-group'>
            <label htmlFor='password' className='auth-label'>Password:</label>
            <div className={authRulesClass}>
                <p className='auth-rules-p'>Make sure your password includes:</p>
                <ul className='auth-rules-list'>
                    <li>minimum 8 characters</li>
                    <li>uppercase letter</li>
                    <li>lowercase letter</li>
                    <li>number</li>
                    <li>symbol (e.g., !, @, #, $, %)</li>
                </ul>
            </div>
            <input type='password' id='password' name='password' required className='auth-input'></input>
            <span className='error-message margin-1-0' id='passwordError'></span>
        </div>
    );
}