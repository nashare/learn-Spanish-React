import { normalizeString } from "../normalizeString";
import { playAudio } from "../playAudio";
import { wrongRightClasses } from "./wrongRightClasses";

export function soundAndImagesTestResult(
    categoryName: string, 
    word: string, 
    shuffledGuesses: string[],
    result: boolean | null, 
    userAnswer: string): JSX.Element 
    {

    const wordForPath = normalizeString(word);
    const normalizedUserAnswer = normalizeString(userAnswer);
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
                    const normalizedGuess = normalizeString(guess);
                    let imageClass = wrongRightClasses(normalizedGuess, wordForPath,
                        result, normalizedUserAnswer, '', ' result-img-green', ' result-img-red');
                    return (
                        <label className='image-label' key={index}>
                            <input type='radio' name='guess' className='hidden-radio' value={guess} disabled/>
                            <img src={`/${categoryName}/${normalizedGuess}/${normalizedGuess}.jpg`} alt={categoryName} className={imageClass} />
                        </label>
                    );
                })}
            </div>
        </section>
    );
};