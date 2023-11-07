import "./TestPage.css";
import { useState, useEffect, useMemo } from "react";
import { testInstances } from "../../models/Test";
import { useNavigate, useParams } from "react-router-dom";
import { Test } from "../../models/Test";
import { shuffle } from "lodash";
import { words } from "../../content/words";


export const TestPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const category: string = params.category as string;
    const testInst: Test = testInstances[category];
    if (testInst.testNumber > 9) {
        testInstances[category] = new Test(category, shuffle(words[category]));
    }
    const [inputVal, setInputVal] = useState<string>('');
    const [checkButtinDisabled, setCheckButtonDisabled] = useState<boolean>(true)
    useEffect(() => {
        setCheckButtonDisabled(!inputVal.trim());
    }, [inputVal]);

    const testContent = useMemo(() => {
        return testInst.createTest(setInputVal);
    }, [testInst, setInputVal]);

    const handleCheck = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        event.preventDefault();
        testInst.setUserResult(inputVal);
        navigate(`/categories/${category}/test/result`);
    };

    return (
        <main className="main">
        <div className='test test-general flex-column-center'>
            <p>Test number: {testInst.testNumber + 1}/10</p>
            {testContent}
        </div>
        {checkButtinDisabled ?
            <button className='test-check button-yellow margin-2' disabled>Check</button> :
                <a href="/" onClick={handleCheck} className='test-check button-yellow margin-2'>Check</a>
        }
        </main>
    )
}
