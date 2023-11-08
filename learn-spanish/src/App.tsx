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
import { userInst } from './models/user';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(userInst.isAuthenticated);
                                                                                           
  return (
    <>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={
          <ProtectedRouteAuth isAuthenticated={isAuthenticated}>
            <LogInPage setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRouteAuth>
        } />
        <Route path="/signup" element={
          <ProtectedRouteAuth isAuthenticated={isAuthenticated}>
            <SignUpPage setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRouteAuth>
        } />
        <Route path="/categories" element={
          <ProtectedRouteCateg isAuthenticated={isAuthenticated}>
            <CategoriesPage />
          </ProtectedRouteCateg>
        } />
        {Object.keys(words).map((category) => {
          const routes = [
            { path: "/categories/:category", component: CategoryPage },
            { path: "/categories/:category/test", component: TestPage },
            { path: "/categories/:category/test/result", component: TestResultPage },
            { path: "/categories/:category/test/complete", component: TestCompletePage },
          ];

          return routes.map((route, index) => (
            <Route
              key={`${category}-route-${index}`}
              path={route.path}
              element={
                <ProtectedRouteCateg isAuthenticated={isAuthenticated}>
                  <route.component />
                </ProtectedRouteCateg>
              }
            />
          ));
        })}
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
