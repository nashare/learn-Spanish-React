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
                {shuffledGuesses.map((guess, index) => (
                    <label className='radio-label' key={index}>
                        <input
                            type='radio'
                            name='guess'
                            value={guess}
                            onChange={handleInputChange}
                        />
                        <p className='radio-label-p'>{guess}</p>
                    </label>
                ))}
            </div>
        </section>)
}