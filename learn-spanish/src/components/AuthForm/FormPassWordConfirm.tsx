import React from 'react';

type FormPasswordConfirmProps = {
    value: string;
    onChange: (value: string) => void;
    passwordConfirmError: string;
};

export const FormPasswordConfirm = ({ value, onChange, passwordConfirmError }: FormPasswordConfirmProps): JSX.Element => {

    const errorClass: string = passwordConfirmError !== "" ? 'error-message margin-1-0' : 'hidden';

    return (
        <div className='form-group'>
            <label htmlFor='passwordConfirmInput' className='auth-label'>Confirm password:</label>
            <input type='password' name='passwordConfirm' id='passwordConfirmInput'
                className='auth-input' required
                value={value} onChange={(e) => onChange(e.target.value)} ></input>
            <span className={errorClass}>{passwordConfirmError}</span>
        </div>
    );
}