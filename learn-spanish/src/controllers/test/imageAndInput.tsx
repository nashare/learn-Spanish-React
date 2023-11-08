import { normalizeString } from "../normalizeString";

export function imageAndInputTest(
    categoryName: string,
    word: string,
    setInputVal: (value: string) => void
    ): JSX.Element {
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputVal(e.target.value);
    };

    return (
        <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.jpg`} /> 
            <input type='text' name="testValue" className='test-input' onChange={handleInputChange} /> 
        </section>
    );
}
