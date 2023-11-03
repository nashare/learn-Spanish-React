import homePageImg from "../../content/home/home.jpg";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/userContext";


export const HomePage = () => {
    const { user } = useUser();
    return (
        <main className="main">
        <section className='homepage-content'>
            <div className='homepage-text'>
                <h1 className='homepage-title'>Learn Spanish visually:</h1>
                <h2 className='homepage-subtitle'>Discover words through images</h2>
            </div>
            <div className='flex-column-center'>
                <img className='homepage-image' alt="girl laptop cat gato" src={homePageImg}></img>
            </div>
        </section>
            {user.isAuthenticated ?
                <Link to='/categories' className="button-yellow margin-1-4">
                    <li>Start Learning</li>
                </Link>
                :
                <Link to='/logIn' className="button-yellow margin-1-4">
                    <li>Start Learning</li>
                </Link>
            }
        </main>
    );
}
