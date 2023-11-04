import React from 'react';

type FormPasswordConfirmProps = {
    value: string;
    onChange: (value: string) => void;
};

export const FormPasswordConfirm = ({ value, onChange }: FormPasswordConfirmProps) => {
    return (
        <div className='form-group'>
            <label htmlFor='password' className='auth-label'>Confirm password:</label>
            <input type='password' id='passwordConfirm' name='passwordConfirm' 
                className='auth-input' required
                value={value} onChange={(e) => onChange(e.target.value)} ></input>
            <span className='error-message margin-1-0' id='passwordConfirmError'>Passwords do not match.</span>
        </div>
    );
}