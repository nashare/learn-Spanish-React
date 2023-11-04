import { words } from "../content/words";
import { normalizeString } from "./normalizeString";
// import Chance from 'chance';

export function createCategory(category: string): string {
    // const chance = new Chance();
    // const wordsToShow = chance.shuffle(words[category]);
    return words[category].map(word => {
        const wordForPath = normalizeString(word);
        return `<section class='word-container'>
              <img src='/${category}/${wordForPath}/${wordForPath}.jpg' alt='${word}'>
              <p class='word-text'>${word}</p>
              <audio id='${wordForPath}_audio'>
                  <source src='/${category}/${wordForPath}/${wordForPath}.mp3' type='audio/mp3'>
              </audio>
              <button id='${wordForPath}' class="button-yellow">Play</button>
            </section>`;
    }).join('');

}