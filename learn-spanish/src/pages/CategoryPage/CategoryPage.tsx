import "./CategoryPage.css";
import { Link, useParams } from "react-router-dom";
import { createCategory } from "../../controllers/category/createCategory";
import { words } from "../../content/words";
import { shuffle } from 'lodash';

export const CategoryPage = (): JSX.Element => {
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
