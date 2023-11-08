import { normalizeString } from "../normalizeString";

export function imageAndInputTestResult(
    categoryName: string,
    word: string,
    result: boolean | null,
    userAnswer: string): JSX.Element {
    
    return (
        <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.jpg`} /> 
            {result ? 
                <p className='result-p-green'>{word}</p>
            :
                <>
                <p className='result-p-red'>{userAnswer}</p>
                <p className='result-p-green'>{word}</p>
                </>
            }
        </section>
    );
}
