import "./CategoriesPage.css";
import { words } from "../../content/words";
import { Link } from "react-router-dom";
import { userInst } from "../../models/User";


export const CategoriesPage = () => {
    function applyFilter(category: string): string {
        if (userInst.categories.includes(category)) {
            return "category categories-filter"
        } else {
            return "category"
        }
    }
    return (
        <main className="main">
            <ul className="categories-container">
                {Object.keys(words).map((category) => (
                    <li key={category} className={applyFilter(category)}>
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
