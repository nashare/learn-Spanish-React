import "./CategoryPage.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { createCategory } from "../../controllers/createCategory";
import { words } from "../../content/words";
import { shuffle } from 'lodash';

export const CategoryPage = () => {
    const params = useParams();
    const category: string = params.category as string;
    const categoryContent = createCategory(shuffle(words[category]), category);

    return (
        <main className="main">
            <ul className='category-container'>
                {categoryContent}
            </ul>
            <Link to={`/categories/${category}/test`} className='category-practice button-yellow link'>
                Practice
            </Link>
            
        </main>
    );
}
