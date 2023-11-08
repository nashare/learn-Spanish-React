import { Link } from "react-router-dom";
import './Header.css';
import { userInst } from "../../models/user";

interface HeaderProps {
    isAuthenticated: boolean;
    setIsAuthenticated: (authState: boolean) => void;
}

export const Header = ({ isAuthenticated, setIsAuthenticated }: HeaderProps): JSX.Element => {
    
    const handleLogout = (): void=> {
        setIsAuthenticated(userInst.logOut());
    };

    return (
        <header className='header'>
            <nav className='header-nav'>
                <li className='header-link link'><Link to='/' className='link'>
                    HOME
                </Link ></li>
                <ul className='header-links'>
                    {isAuthenticated ? 
                        <>
                            <li className='link header-link'><Link to='/categories' className='link'>
                                Learn
                            </Link></li>
                            <li className='link header-link'><Link to='/' onClick={handleLogout} className='link'>
                                Log Out
                            </Link></li>
                        </>
                    : 
                        <>
                            <li className='header-link link'><Link to='/signUp' className='link'>
                                Sign Up
                            </Link></li>
                            <li className='header-link link'><Link to='/logIn' className='link'>
                                Log In
                            </Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}
