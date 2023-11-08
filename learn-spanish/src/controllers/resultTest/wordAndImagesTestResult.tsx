import { normalizeString } from "../normalizeString";

export function wordAndImagesTestResult(
    categoryName: string,
    word: string,
    shuffledGuesses: string[],
    result: boolean | null, 
    userAnswer: string): JSX.Element {

    const wordForPath = normalizeString(word);

    function wrongRightClasses(guess: string): string {
        let imageClass = '';
        if (result && normalizeString(guess) === wordForPath) {
            imageClass += ' result-img-green';
        } else if (!result && normalizeString(guess) === wordForPath) {
            imageClass += ' result-img-green';
        } else if (!result && normalizeString(guess) === normalizeString(userAnswer)) {
            imageClass += ' result-img-red';
        }
        return imageClass;
    }


    return (
        <section className='test-container flex-column-center'>
            <p className='test-word'>{word}</p>
            <div className='test-guesses test-guesses-images'>
                {shuffledGuesses.map((guess, index) => {
                    const imageClass: string = wrongRightClasses(guess);
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
