import { normalizeString } from "../normalizeString";
import { wrongRightClasses } from "./wrongRightClasses";

export function imageAndTextsTestResult(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    result: boolean | null,
    userAnswer: string)
    : JSX.Element {

    const wordForPath: string = normalizeString(word);
    const normalizedUserAnswer: string = normalizeString(userAnswer);

    return (
        <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/${categoryName}/${wordForPath}/${wordForPath}.jpg`} />
            <div className='test-guesses'>
                {shuffledGuesses.map((guess, index) => {
                    const normalizedGuess: string = normalizeString(guess);
                    let paragraphClass: string = wrongRightClasses(normalizedGuess, wordForPath, 
                        result, normalizedUserAnswer, 'radio-label-p', ' result-p-green', ' result-p-red');
                    return (
                        <label className='radio-label' key={index}>
                            <input
                                disabled
                                type='radio'
                                name='guess'
                                value={guess}
                                checked={normalizedUserAnswer === normalizedGuess}
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