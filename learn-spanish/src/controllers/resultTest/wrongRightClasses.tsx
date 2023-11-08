export function wrongRightClasses(guess: string, word: string, result: boolean | null, 
    userAnswer: string, baseClass: string, classRight: string, 
    classWrong: string): string {

    let imageClass: string = baseClass;
    if (result && guess === word) {
        imageClass += classRight;
    } else if (!result && guess === word) {
        imageClass += classRight;
    } else if (!result && guess === userAnswer) {
        imageClass += classWrong;
    }
    return imageClass;
}