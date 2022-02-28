# Logout

- Navigator 추가 및 log out

## Redirect Home after log out

Profile.js : useNavigate

```javascript
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; //redirect

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate(); //declare
  const onLogOutClick = () => {
    signOut(auth);
    navigate('/'); //use
  };
  return <button onClick={onLogOutClick}>Log Out</button>;
};
export default Profile;
```

새로고침 시 HOME으로 redirect

Router.js

```javascript
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Auth from '../routes/Auth';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Auth />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      </Routes>
    </Router>
  );
};
export default AppRouter;
```

## Similar function

- use history
- use navigate
- navigate

[참고문서](https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb)
