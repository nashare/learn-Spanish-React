import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import homePageImg from "../../content/home/home.jpg";
import "./HomePage.css";


type HomePageProps = {
    loggedIn: boolean;
};

export const HomePage = ({ loggedIn }: HomePageProps) => {
    return (
        <>
        <Header loggedIn={loggedIn} />
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
            <a href='./categories/categories.html'><button className="button-yellow margin-1-4">Start Learning</button></a>
            </main>
        <Footer />
        </>
    );
}
