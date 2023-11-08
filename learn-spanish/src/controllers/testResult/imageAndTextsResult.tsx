import { normalizeString } from "../normalizeString"

export function imageAndTextsTestResult(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    result: boolean | null,
    userAnswer: string)
    : JSX.Element {

    const wordForPath: string = normalizeString(word);

    return (
        <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/${categoryName}/${wordForPath}/${wordForPath}.jpg`} />
            <div className='test-guesses'>
                {shuffledGuesses.map((guess, index) => (
                    <label className='radio-label' key={index}>
                        <input
                            disabled
                            type='radio'
                            name='guess'
                            value={guess}
                        />
                        <p className='radio-label-p'>{guess}</p>
                    </label>
                ))}
            </div>
        </section>)
}