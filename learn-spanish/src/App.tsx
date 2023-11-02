import React, { useState } from 'react';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <>
      <HomePage loggedIn={loggedIn} />
    </>
  );
}

export default App;
