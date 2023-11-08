import { words } from "../content/words";
import { shuffle, random } from 'lodash';
import { wordAndImagesTest } from "../controllers/test/wordAndImagesTest";
import { soundAndImagesTest } from "../controllers/test/soundAndImages";
import { imageAndInputTest } from "../controllers/test/imageAndInput";
import { imageAndTextsTest } from "../controllers/test/imageAndTexts";
import { wordAndImagesTestResult } from "../controllers/resultTest/wordAndImagesTestResult";
import { soundAndImagesTestResult } from "../controllers/resultTest/soundAndImagesTestResult";
import { imageAndInputTestResult } from "../controllers/resultTest/imageAndInputTestResult";
import { imageAndTextsTestResult } from "../controllers/resultTest/imageAndTextsTestResult";
import { normalizeString } from "../controllers/normalizeString";


export class Test {
    category: string;
    words: string[];
    private _testNum: number;
    userAnswer: string[];
    currentTest: JSX.Element | null;
    currentTestResult: JSX.Element | null;
    wrongAnswArr: string[];
    result: null | boolean;
    testType: null | number;
    shuffledGuesses: string[];

    constructor(category: string, words: string[]) {
        this.category = category;
        this.words = words;
        this._testNum = 0;
        this.userAnswer = [];
        this.currentTest = null;
        this.currentTestResult = null;
        this.wrongAnswArr = [];
        this.result = null;
        this.testType = null;
        this.shuffledGuesses = [];
    }

    get testNumber(): number {
        return this._testNum;
    }

    incrementTestNum(): void {
        this._testNum += 1;
    }

    decrementTestNum(): void {
        this._testNum -= 1;
    }

    excludeByIndex(arr: string[], index: number): string[] {
        return arr.slice(0, index).concat(arr.slice(index + 1));
    }

    createGuessesArr(arr: string[], ind: number): string[] {
        const arrayWithoutTestWord: string[] = this.excludeByIndex(arr, ind);
        return shuffle(arrayWithoutTestWord).slice(0, 3);
    }

    createTest(setInputVal: (value: string) => void) {
        this.testType = random(1, 4);
        const arrayForGuesses: string[] = this.createGuessesArr(this.words, this._testNum);
        this.shuffledGuesses = shuffle([...arrayForGuesses, this.words[this._testNum]]);
        switch (this.testType) {
            case 1:
                this.currentTest = wordAndImagesTest(this.category, this.words[this._testNum], this.shuffledGuesses, setInputVal);
                return this.currentTest;
            case 2:
                this.currentTest = soundAndImagesTest(this.category, this.words[this._testNum], this.shuffledGuesses, setInputVal);
                return this.currentTest;
            case 3:
                this.currentTest = imageAndTextsTest(this.category, this.words[this._testNum], this.shuffledGuesses, setInputVal);
                return this.currentTest;
            case 4:
                this.currentTest =  imageAndInputTest(this.category, this.words[this._testNum], setInputVal);
                return this.currentTest;
        }
    }

    setCurrentTestResult() {
        switch (this.testType) {
            case 1:
                this.currentTestResult = wordAndImagesTestResult(this.category, this.words[this._testNum], this.shuffledGuesses, this.result, this.userAnswer[this._testNum]);
                break;
            case 2:
                this.currentTestResult = soundAndImagesTestResult(this.category, this.words[this._testNum], this.shuffledGuesses, this.result, this.userAnswer[this._testNum]);
                break;
            case 3:
                this.currentTestResult = imageAndTextsTestResult(this.category, this.words[this._testNum], this.shuffledGuesses, this.result, this.userAnswer[this._testNum]);
                break;
            case 4:
                this.currentTestResult = imageAndInputTestResult(this.category, this.words[this._testNum], this.result, this.userAnswer[this._testNum]);
                break;
        }

    }

    setUserResult(inputVal: string): void {
        this.userAnswer[this._testNum] = inputVal;
        this.result = normalizeString(this.userAnswer[this._testNum]) === normalizeString(this.words[this._testNum]);
        if (!this.result && !this.wrongAnswArr.includes(this.words[this._testNum])) {
            this.wrongAnswArr.push(this.words[this._testNum]);
        }
        this.setCurrentTestResult();
    }

    checkUserResult(): boolean | null {
        if (this.userAnswer[this._testNum] === undefined) {
            this.decrementTestNum();
        }
        return this.result;
    }
}

type TestInstances = {
    [key: string]: Test;
};

export const testInstances: TestInstances = {};

for (const category in words) {
    testInstances[category] = new Test(category, shuffle(words[category]));
}