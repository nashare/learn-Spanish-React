import "./CategoryPage.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { createCategory } from "../../controllers/createCategory";

export const CategoryPage = () => {
    const params = useParams();
    const category = params.category;
    console.log(params, typeof(category));
    // const categoryContent = createCategory(category);

    return (
        <main className="main">
            <ul className='category-container'>
                {/* {categoryContent} */}
            </ul>
            <Link to={`/categories/${category}/test`} className='category-practice button-yellow link'>
                Practice
            </Link>
            
        </main>
    );
}
