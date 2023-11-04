import React from 'react';

type FormEmailProps = {
    value: string;
    onChange: (value: string) => void;
};

export const FormEmail = ({ value, onChange }: FormEmailProps) => {
    return (
        <div className='form-group'>
            <label htmlFor='email' className='auth-label'>Email:</label>
            <input type='email' id='email' name='email' autoComplete="email" 
                value={value} onChange={(e) => onChange(e.target.value)} required 
                className='auth-input'></input>
            <span className='error-message margin-1-0' id='emailError'>Please enter a valid email.</span>
        </div>
    );
}
