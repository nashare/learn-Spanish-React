import { normalizeString } from "../normalizeString";
import { wrongRightClasses } from "./wrongRightClasses";

export function wordAndImagesTestResult(
    categoryName: string,
    word: string,
    shuffledGuesses: string[],
    result: boolean | null, 
    userAnswer: string): JSX.Element {

    const wordForPath = normalizeString(word);


    return (
        <section className='test-container flex-column-center'>
            <p className='test-word'>{word}</p>
            <div className='test-guesses test-guesses-images'>
                {shuffledGuesses.map((guess, index) => {
                    const normalizedUserAnswer = normalizeString(userAnswer);
                    const normalizedGuess = normalizeString(guess);
                    let imageClass = wrongRightClasses(normalizedGuess, wordForPath,
                        result, normalizedUserAnswer, '', ' result-img-green', ' result-img-red');
                    return (
                    <label className='image-label' key={index}>
                        <input
                            type='radio'
                            name='guess'
                            className='hidden-radio'
                            value={guess}
                            disabled
                        />
                        <img
                            src={`/${categoryName}/${normalizeString(guess)}/${normalizeString(guess)}.jpg`}
                            alt={guess} className={imageClass}
                        />
                    </label>)
                })}
            </div>
        </section>
    );
}
