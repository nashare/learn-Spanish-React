import React from 'react';

export const FormEmail = () => {
    return (
        <div className='form-group'>
            <label htmlFor='email' className='auth-label'>Email:</label>
            <input type='email' id='email' name='email' autoComplete="email" required className='auth-input'></input>
            <span className='error-message margin-1-0' id='emailError'>Please enter a valid email.</span>
        </div>
    );
}
