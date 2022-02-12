import React, { useState } from 'react';
import AppRouter from './Router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; 2022 Lee eunji/eunjitech@gmail.com</footer>
    </>
  );
}

export default App;
