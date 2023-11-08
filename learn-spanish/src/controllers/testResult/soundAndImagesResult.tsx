import { normalizeString } from "../normalizeString";
import { playAudio } from "../playAudio";

export function soundAndImagesTestResult(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    result: boolean | null, 
    userAnswer: string): JSX.Element 
    {

    const wordForPath = normalizeString(word);
    const handlePlayClick = () => {
        playAudio(wordForPath);
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
                            <input type='radio' name='guess' className='hidden-radio' value={guess} disabled/>
                            <img src={`/${categoryName}/${guessPath}/${guessPath}.jpg`} alt={categoryName} />
                        </label>
                    );
                })}
            </div>
        </section>
    );
};