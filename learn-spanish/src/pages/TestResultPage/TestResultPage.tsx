import "./TestResultPage.css";
import { testInstances } from "../../models/Test";
import { useNavigate, useParams } from "react-router-dom";
import { Test } from "../../models/Test";


export const TestResultPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const category: string = params.category as string;
    const testInst: Test = testInstances[category];

    const handleNext = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        event.preventDefault();
        if (testInst.testNumber < 9) {
            testInst.incrementTestNum();
            navigate(`/categories/${category}/test`);
        } else {
            navigate(`/categories/${category}/test/complete`);
        }
    };


    return (
        <main className="main">
        <div className='test-result test-general flex-column-center'></div>
        {testInst.checkUserResult() ?
            <p className='result-p-green margin-2'>Correct!</p> :
            <p className='result-p-wrong margin-2'>Oops! That was not correct.</p>
        }
            <a href="/" onClick={handleNext} className='test-result-button button-yellow margin-2'>Next</a>
        </main>
        )
}