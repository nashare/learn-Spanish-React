import { normalizeString } from "../normalizeString"

export function imageAndInputTest(categoryName: string, word: string): JSX.Element {
    return (
            <section className='test-container flex-column-center'>
            <img alt={categoryName} src={`/content/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.jpg`} />
            <input type='text' className='test-input' />
            </section>)
}