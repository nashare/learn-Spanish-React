import "./TestCompletePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Test } from "../../models/Test";
import { testInstances } from "../../models/Test";
import { createCategory } from "../../controllers/createCategory";

export const TestCompletePage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const category: string = params.category as string;
    const testInst: Test = testInstances[category];
    testInst.incrementTestNum();
    const wrongAnswNum: number = testInst.wrongAnswArr.length;
    let wrongNumbSentencePart: string;
    let reviewSection;
    if (wrongAnswNum > 0) {
        wrongNumbSentencePart = wrongAnswNum === 1 ? 'the word' : 'these words';
        reviewSection = createCategory(testInst.wrongAnswArr, category);
    }

    return (
        <main className='main'>
            <div className='test-complete'>
            {wrongAnswNum === 0 ?
                <>
                    <p className="test-complete-result"> Your result is 10 / 10. Great job!</p>
                    <a href='/categories' className='complete-button-container flex-column-center link'>
                        <button className="button-yellow">Keep learning</button>
                    </a>
                </>
                :
                <>
                    <p className="test-complete-result">Your result is {wrongAnswNum}/10</p>
                    <p className="test-complete-result">Please review {}:</p>
                    {reviewSection}
                    <a href={`/categories/${category}/test`} className='complete-button-container flex-column-center'>
                        <button className='complete-button-practice button-yellow margin-2'>Practice</button>
                    </a>
                </>
            }
            </div>
        </main>
    )
}