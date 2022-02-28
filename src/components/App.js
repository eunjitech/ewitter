import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import firebaseApp, { authService } from '../fbase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  //console.log(authService.currentUser);
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setInit(true);
      if (user) {
        //const uid = user.uid;
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [auth]);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : '초기화 중..'}
      <footer>&copy; 2022 Lee eunji/eunjitech@gmail.com</footer>
    </>
  );
}

export default App;
