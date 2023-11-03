import React from 'react';

export const FormPasswordConfirm = () => {
    return (
        <div className='form-group'>
            <label htmlFor='password' className='auth-label'>Confirm password:</label>
            <input type='password' id='passwordConfirm' name='passwordConfirm' className='auth-input' required></input>
            <span className='error-message margin-1-0' id='passwordConfirmError'>Passwords do not match.</span>
        </div>
    );
}