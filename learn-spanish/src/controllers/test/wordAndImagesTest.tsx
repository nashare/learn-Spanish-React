import { normalizeString } from "../normalizeString";

export function wordAndImagesTest(
    categoryName: string,
    word: string,
    shuffledGuesses: string[],
    setInputVal: (value: string) => void
    ): JSX.Element {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    return (
        <section className='test-container flex-column-center'>
            <p className='test-word'>{word}</p>
            <div className='test-guesses test-guesses-images'>
                {shuffledGuesses.map((guess, index) => (
                    <label className='image-label' key={index}>
                        <input
                            type='radio'
                            name='guess'
                            className='hidden-radio'
                            value={guess}
                            onChange={handleInputChange}
                        />
                        <img
                            src={`/${categoryName}/${normalizeString(guess)}/${normalizeString(guess)}.jpg`}
                            alt={guess}
                        />
                    </label>
                ))}
            </div>
        </section>
    );
}
