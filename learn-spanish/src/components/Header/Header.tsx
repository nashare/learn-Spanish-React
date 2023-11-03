import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { useUser } from '../../utils/userContext';

export const Header = () => {
    const { user } = useUser();
    return (
        <header className='header'>
            <nav className='header-nav'>
                <Link to='/' className='header-link link '>
                    <li>HOME</li>
                </Link>
                <ul className='header-links'>
                    {user.isAuthenticated ? 
                        <>
                            <Link to='/categories' className='link header-link'>
                                <li>Learn</li>
                            </Link>
                            <Link to='/' className='link header-link' id='log-out'>
                                <li>Log Out</li>
                            </Link>
                        </>
                    : 
                        <>
                            <Link to='/signUp' className='header-link link'>
                                <li>Sign Up</li>
                            </Link>
                            <Link to='/logIn' className='header-link link'>
                                <li>Log In</li>
                            </Link>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}
