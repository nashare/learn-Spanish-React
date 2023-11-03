import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
