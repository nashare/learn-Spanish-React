import { words } from "../content/words";
import { shuffle, random } from 'lodash';
import { wordAndImagesTest } from "../controllers/test/wordAndImagesTest";
import { soundAndImagesTest } from "../controllers/test/soundAndImages";
import { imageAndInputTest } from "../controllers/test/imageAndInput";
import { imageAndTextsTest } from "../controllers/test/imageAndTexts";
import { normalizeString } from "../controllers/normalizeString";


export class Test {
    category: string;
    words: string[];
    private _testNum: number;
    userResult: string[];
    currentTest: JSX.Element | null;
    wrongAnswArr: string[];

    constructor(category: string, words: string[]) {
        this.category = category;
        this.words = words;
        this._testNum = 0;
        this.userResult = [];
        this.currentTest = null;
        this.wrongAnswArr = [];
    }

    get testNumber(): number {
        return this._testNum;
    }

    incrementTestNum(): void {
        this._testNum += 1;
    }

    excludeByIndex(arr: string[], index: number) {
        return arr.slice(0, index).concat(arr.slice(index + 1));
    }

    createGuessesArr(arr: string[], ind: number) {
        const arrayWithoutTestWord: string[] = this.excludeByIndex(arr, ind);
        return shuffle(arrayWithoutTestWord).slice(0, 3);
    }

    createTest(setInputVal: (value: string) => void) {
        const testType: number = random(1, 4);
        const arrayForGuesses: string[] = this.createGuessesArr(this.words, this._testNum);
        const shuffledGuesses = shuffle([...arrayForGuesses, this.words[this._testNum]]);
        switch (testType) {
            case 1:
                this.currentTest =  wordAndImagesTest(this.category, this.words[this._testNum], shuffledGuesses, setInputVal);
                return this.currentTest;
            case 2:
                this.currentTest =  soundAndImagesTest(this.category, this.words[this._testNum], shuffledGuesses, setInputVal);
                return this.currentTest;
            case 3:
                this.currentTest =  imageAndTextsTest(this.category, this.words[this._testNum], shuffledGuesses, setInputVal);
                return this.currentTest;
            case 4:
                this.currentTest =  imageAndInputTest(this.category, this.words[this._testNum], setInputVal);
                return this.currentTest;
        }
    }

    setUserResult(inputVal: string): void {
        this.userResult[this._testNum] = inputVal;
    }

    checkUserResult(): boolean {
        const result =  normalizeString(this.userResult[this._testNum]) === normalizeString(this.words[this._testNum]);
        if (!result && !this.wrongAnswArr.includes(this.words[this._testNum])) {
            this.wrongAnswArr.push(this.words[this._testNum]);
        }
        return result;
    }
}

type TestInstances = {
    [key: string]: Test;
};

export const testInstances: TestInstances = {};

for (const category in words) {
    testInstances[category] = new Test(category, shuffle(words[category]));
}