import { Dispatch, SetStateAction } from 'react';
import { Link } from "react-router-dom";
import { User } from '../../models/user';
import './Header.css';

interface HeaderProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

export const Header = ({ user, setUser }: HeaderProps) => {
    const handleLogOut = () => {
        user.logOut();
        setUser(new User());
    };
    return (
        <header className='header'>
            <nav className='header-nav'>
                <li className='header-link link'><Link to='/' className='link'>
                    HOME
                </Link ></li>
                <ul className='header-links'>
                    {user.isAuthenticated ? 
                        <>
                            <li className='link header-link'><Link to='/categories' className='link'>
                                Learn
                            </Link></li>
                            <li className='link header-link'><Link to='/' onClick={handleLogOut} className='link'>
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
