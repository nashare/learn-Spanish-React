import { normalizeString } from "../normalizeString"

export function imageAndTextsTestResult(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    result: boolean | null,
    userAnswer: string)
    : JSX.Element {

    const wordForPath: string = normalizeString(word);

    function wrongRightClasses(guess: string): string {
        let paragraphClass = 'radio-label-p';
        if (result && normalizeString(guess) === wordForPath) {
            paragraphClass += ' result-p-green';
        } else if (!result && normalizeString(guess) === wordForPath) {
            paragraphClass += ' result-p-green';
        } else if (!result && normalizeString(guess) === normalizeString(userAnswer)) {
            paragraphClass += ' result-p-red';
        }
        return paragraphClass;
    }

    return (
        <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/${categoryName}/${wordForPath}/${wordForPath}.jpg`} />
            <div className='test-guesses'>
                {shuffledGuesses.map((guess, index) => {
                    let paragraphClass = wrongRightClasses(guess);
                    return (
                        <label className='radio-label' key={index}>
                            <input
                                disabled
                                type='radio'
                                name='guess'
                                value={guess}
                                checked={normalizeString(userAnswer) === normalizeString(guess)}
                                readOnly
                            />
                            <p className={paragraphClass}>{guess}</p>
                        </label>
                    );
                })}
            </div>
        </section>
    );
}