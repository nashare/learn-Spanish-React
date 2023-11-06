import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProtectedRouteCateg } from './components/ProtectedRouteCateg/ProtectedRouteCateg';
import { ProtectedRouteAuth } from './components/ProtectedRouteAuth/ProtectedRouteAuth';
import { words } from './content/words';
import { TestPage } from './pages/TestPage/TestPage';
import { TestCompletePage } from './pages/TestCompletePage/TestCompletePage';
import { TestResultPage } from './pages/TestResultPage/TestResultPage';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { userClass } from './models/user';

function App() {
  const [user, setUser] = useState(userClass);
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/login" element={
          <ProtectedRouteAuth user={user}>
            <LogInPage user={user} setUser={setUser} />
          </ProtectedRouteAuth>
        } />
        <Route path="/signup" element={
          <ProtectedRouteAuth user={user}>
            <SignUpPage user={user} setUser={setUser} />
          </ProtectedRouteAuth>
        } />
        <Route path="/categories" element={
          <ProtectedRouteCateg user={user}>
            <CategoriesPage />
          </ProtectedRouteCateg>
        } />
        {Object.keys(words).map((category) => (
          <>
            <Route key={category} path="/categories/:category" element={
              <ProtectedRouteCateg user={user}>
                <CategoryPage />
              </ProtectedRouteCateg>
            } />
            <Route key={category} path="/categories/:category/test" element={
              <ProtectedRouteCateg user={user}>
                <TestPage />
              </ProtectedRouteCateg>
            } />
            <Route key={category} path="/categories/:category/test/result" element={
              <ProtectedRouteCateg user={user}>
                <TestResultPage />
              </ProtectedRouteCateg>
            } />
            <Route key={category} path="/categories/:category/test/complete" element={
              <ProtectedRouteCateg user={user}>
                <TestCompletePage />
              </ProtectedRouteCateg>
            } />
          </>
        ))}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
