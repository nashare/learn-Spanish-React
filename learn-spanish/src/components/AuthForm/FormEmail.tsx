type FormEmailProps = {
    value: string;
    onChange: (value: string) => void;
    emailError: string;
};

export const FormEmail = ({ value, onChange, emailError }: FormEmailProps): JSX.Element => {
    const errorClass: string = emailError !== "" ? 'error-message margin-1-0' : 'hidden';
    return (
        <div className='form-group'>
            <label htmlFor='emailInput' className='auth-label'>Email:</label>
            <input type='email' name='email' autoComplete="email" id="emailInput"
                value={value} onChange={(e) => onChange(e.target.value)} required 
                className='auth-input'></input>
            <span className={errorClass}>{emailError}</span>
        </div>
    );
}
