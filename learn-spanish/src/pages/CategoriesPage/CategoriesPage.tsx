import "./CategoriesPage.css";
import { words } from "../../content/words";
import { Link } from "react-router-dom";


export const CategoriesPage = () => {
    // const [completedCategories, setCompletedCategories] = useState(userInst.categories);

    return (
        <main className="main">
            <ul className="categories-container">
                {Object.keys(words).map((category) => (
                    <li key={category} className='category' id={`content-${category}`}>
                        <Link to={`/categories/${category}`} className='link categories-link'>
                            <img src={`/${category}/${category}.jpg`} alt={category} className='border-bottom-straight' />
                            <p id={`text-${category}`} className='categories-name'>{category.toUpperCase()}</p>
                        </Link>
                        <div className='categories-links'>
                            <Link to={`/categories/${category}`} className='button-yellow categories-link-bottom'>Study</Link>
                            <Link to={`/categories/${category}/test`} className='categories-tests button-yellow categories-link-bottom' id={category}>Tests</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
