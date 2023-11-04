import "./HomePage.css";
import { Link } from "react-router-dom";
import { useUser } from "../../models/userContext";


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
                    <img className='homepage-image' alt="girl laptop cat gato" src="/home/home.jpg"></img>
            </div>
        </section>
            {user.isAuthenticated ?
                <li className="button-yellow margin-1-4"><Link to='/categories' className="link">
                    Start Learning
                </Link></li>
                :
                <li className="button-yellow margin-1-4"><Link to='/logIn' className="link">
                    Start Learning
                </Link></li>
            }
        </main>
    );
}
