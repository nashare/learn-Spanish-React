import React from 'react';

interface FormPasswordProps {
    shouldHideRules: boolean;
    value: string;
    onChange: (value: string) => void;
    passwordError: string;
}

export const FormPassword = ({ value, onChange, shouldHideRules, passwordError }: FormPasswordProps): JSX.Element => {

    const authRulesClass:string = shouldHideRules ? 'hidden' : 'auth-rules';
    const errorClass: string = passwordError !== "" ? 'error-message margin-1-0' : 'hidden';
    
    return (
        <div className='form-group'>
            <label htmlFor='passwordInput' className='auth-label'>Password:</label>
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
            <input type='password' name='password' id='passwordInput'
                value={value} onChange={(e) => onChange(e.target.value)} 
                required className='auth-input'></input>
            <span className={errorClass}>{passwordError}</span>
        </div>
    );
}