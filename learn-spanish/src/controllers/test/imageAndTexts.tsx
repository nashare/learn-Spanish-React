import { normalizeString } from "../normalizeString"

export function imageAndTextsTest(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    setInputVal: (value: string) => void)
    : JSX.Element {

    const wordForPath: string = normalizeString(word);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    return (
        <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/${categoryName}/${wordForPath}/${wordForPath}.jpg`} />
                <div className='test-guesses'>
                <label className='radio-label'>
                    <input type='radio' name='guess' value={shuffledGuesses[0]} onChange={handleInputChange} />
                    <p className='radio-label-p'>{shuffledGuesses[0]}</p>
                </label>
                <label className='radio-label'>
                    <input type='radio' name='guess' value={shuffledGuesses[1]} onChange={handleInputChange} />
                    <p className='radio-label-p'>{shuffledGuesses[1]}</p>
                </label>
                <label className='radio-label'>
                    <input type='radio' name='guess' value={shuffledGuesses[2]} onChange={handleInputChange} />
                    <p className='radio-label-p'>{shuffledGuesses[2]}</p>
                </label>
                <label className='radio-label'>
                    <input type='radio' name='guess' value={shuffledGuesses[3]} onChange={handleInputChange} />
                    <p className='radio-label-p'>{shuffledGuesses[3]}</p>
                </label>
            </div>
        </section>)
}