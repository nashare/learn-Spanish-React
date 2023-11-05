import { normalizeString } from "./normalizeString";
import { playAudio } from "./playAudio";

export function createCategory(words: string[], category: string): JSX.Element[] {
    
    return words.map((word: string) => {
        const wordForPath = normalizeString(word);
        return (
            <section key={wordForPath} className='word-container'>
                <img src={`/${category}/${wordForPath}/${wordForPath}.jpg`} alt={word} />
                <p className='word-text'>{word}</p>
                <audio id={`${wordForPath}_audio`}>
                    <source src={`/${category}/${wordForPath}/${wordForPath}.mp3`} type="audio/mp3" />
                </audio>
                <button id={`${wordForPath}`} onClick={() => playAudio(wordForPath)} className="button-yellow">Play</button>
            </section>
        );
    });
}