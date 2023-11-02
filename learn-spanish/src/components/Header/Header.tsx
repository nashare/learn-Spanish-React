import React from 'react';
import './Header.css';

type HeaderProps = {
    loggedIn: boolean;
};

export const Header = ({ loggedIn }: HeaderProps) => {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <a href='/' className='header-link link '>
                    <li>HOME</li>
                </a>
                <ul className='header-links'>
                    {loggedIn ? 
                        <>
                            <a href='/categories/categories.html' className='link header-link'>
                                <li>Learn</li>
                            </a>
                            <a href='/' className='link header-link' id='log-out'>
                                <li>Log Out</li>
                            </a>
                        </>
                    : 
                        <>
                            <a href='./signUp.html' className='header-link link'>
                                <li>Sign Up</li>
                            </a>
                            <a href='./logIn.html' className='header-link link'>
                                <li>Log In</li>
                            </a> 
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}
