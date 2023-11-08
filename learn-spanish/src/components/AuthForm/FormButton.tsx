import React from 'react';

export const FormButton = (): JSX.Element => {
    return (
        <div className='form-group'>
            <div className='form-button'>
                <button type='submit' className='button-yellow margin-2'>Submit</button>
            </div>
            <div id='serverError' className='error-message'></div>
        </div>
    );
}