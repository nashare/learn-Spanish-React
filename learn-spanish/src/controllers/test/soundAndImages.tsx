import { normalizeString } from "../normalizeString";
import { playAudio } from "../playAudio";

export function soundAndImagesTest(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    setInputVal: (value: string) => void
    ): JSX.Element 
    {

    const wordForPath = normalizeString(word);
    const handlePlayClick = () => {
        playAudio(wordForPath);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    return (
        <section className='test-container flex-column-center'>
            <audio id={`${wordForPath}_audio`}>
                <source src={`/${categoryName}/${wordForPath}/${wordForPath}.mp3`} type='audio/mp3' />
            </audio>
            <button id={`${wordForPath}`} className='button-yellow' onClick={handlePlayClick}>Play</button>
            <div className='test-guesses test-guesses-images'>
                {shuffledGuesses.map((guess, index) => {
                    const guessPath = normalizeString(guess);
                    return (
                        <label className='image-label' key={index}>
                            <input type='radio' name='imageChoice' className='hidden-radio' value={guess} onChange={handleInputChange} />
                            <img src={`/${categoryName}/${guessPath}/${guessPath}.jpg`} alt={categoryName} />
                        </label>
                    );
                })}
            </div>
        </section>
    );
};