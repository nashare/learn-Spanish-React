import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { words } from './content/words';
import { TestPage } from './pages/TestPage/TestPage';
import { TestCompletePage } from './pages/TestCompletePage/TestCompletePage';
import { TestResultPage } from './pages/TestResultPage/TestResultPage';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {Object.keys(words).map((category) => (
          <>
          <Route key={category} path={`/categories/:${category}`} element={<CategoryPage />} />
          <Route key={category} path={`/categories/:${category}/test`} element={<TestPage />} />
          <Route key={category} path={`/categories/:${category}/test/result`} element={<TestResultPage />} />
          <Route key={category} path={`/categories/:${category}/test/complete`} element={<TestCompletePage />} />
          </>
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
