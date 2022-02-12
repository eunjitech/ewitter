import React, { useState } from 'react';
import AppRouter from './Router';
import firebaseApp, { authService } from '../fbase';

function App() {
  //console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; 2022 Lee eunji/eunjitech@gmail.com</footer>
    </>
  );
}

export default App;
