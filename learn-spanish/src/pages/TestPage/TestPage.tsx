import "./TestPage.css";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Test, testInstances } from "../../models/Test";
import { shuffle } from "lodash";
import { words } from "../../content/words";

export const TestPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const category = params.category as string;

    const [testInst, setTestInst] = useState<Test>(() => {
        let currentTest = testInstances[category];
        if (currentTest.testNumber > 9) {
            currentTest = new Test(category, shuffle(words[category]));
            testInstances[category] = currentTest;
        }
        return currentTest;
    });

    const [inputVal, setInputVal] = useState<string>('');
    const [checkButtonDisabled, setCheckButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        setCheckButtonDisabled(!inputVal.trim());
    }, [inputVal]);

    const testContent = useMemo(() => {
        return testInst.createTest(setInputVal);
    }, [testInst, setInputVal]);

    const handleCheck = (): void => {
        testInst.setUserResult(inputVal);
        navigate(`/categories/${category}/test/result`);
    };

    return (
        <main className="main">
            <div className='test test-general flex-column-center'>
                <p>Test number: {testInst.testNumber + 1}/10</p>
                {testContent}
            </div>
            {checkButtonDisabled ?
                <button className='test-check button-yellow margin-2' disabled>Check</button> :
                <button onClick={handleCheck} className='test-check button-yellow margin-2'>Check</button>
            }
        </main>
    );
};
