import { normalizeString } from "../normalizeString";

export function wordAndImagesTest(
    categoryName: string,
    word: string,
    shuffledGuesses: string[]
): JSX.Element {
    return (
        <section className='test-container flex-column-center'>
            <p className='test-word'>{word}</p>
            <div className='test-guesses test-guesses-images'>
                {shuffledGuesses.map((guess, index) => (
                    <label className='image-label' key={index}>
                        <input
                            type='radio'
                            name='imageChoice'
                            className='hidden-radio'
                            value={guess}
                        />
                        <img
                            src={`/content/${categoryName}/${normalizeString(guess)}/${normalizeString(guess)}.jpg`}
                            alt={guess}
                        />
                    </label>
                ))}
            </div>
        </section>
    );
}
