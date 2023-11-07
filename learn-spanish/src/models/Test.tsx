import { words } from "../content/words";
import { shuffle, random } from 'lodash';
import { wordAndImagesTest } from "../controllers/test/wordAndImagesTest";
import { soundAndImagesTest } from "../controllers/test/soundAndImages";
import { imageAndInputTest } from "../controllers/test/imageAndInput";
import { imageAndTextsTest } from "../controllers/test/imageAndTexts";


class Test {
    category: string;
    words: string[];
    testNum: number;

    constructor(category: string, words: string[], testNum: number = 1) {
        this.category = category;
        this.words = words;
        this.testNum = testNum;
    }

    excludeByIndex(arr: string[], index: number) {
        return arr.slice(0, index).concat(arr.slice(index + 1));
    }

    createGuessesArr(arr: string[], ind: number) {
        const arrayWithoutTestWord: string[] = this.excludeByIndex(arr, ind);
        return shuffle(arrayWithoutTestWord).slice(0, 3);
    }

    createTest() {
        const testType: number = random(1, 4);
        const arrayForGuesses: string[] = this.createGuessesArr(this.words, this.testNum-1);
        const shuffledGuesses = shuffle([...arrayForGuesses, this.words[this.testNum]]);
        switch (testType) {
            case 1:
                return wordAndImagesTest(this.category, this.words[this.testNum], shuffledGuesses);
                break;
            case 2:
                return soundAndImagesTest(this.category, this.words[this.testNum], shuffledGuesses);
                break;
            case 3:
                return imageAndTextsTest(this.category, this.words[this.testNum], shuffledGuesses);
                break;
            case 4:
                return imageAndInputTest(this.category, this.words[this.testNum]);
                break;
            default:
                break;
        }
    }

}

type TestInstances = {
    [key: string]: Test;
};

export const testInstances: TestInstances = {};

for (const category in words) {
    testInstances[category] = new Test(category, shuffle(words[category]));
}