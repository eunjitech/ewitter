# Using firebase auth

- firebase auth를 이용하여 로그인 기능, 사용자 로그인 상태를 알아본다.

## Start firebase auth

fbase.js

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig); //create firebase project
export const authService = getAuth(); //add auth service

export default firebaseApp;
```

- 변수 선언 순서 주의! 🌟

## Connect App

App.js

```javascript
import firebaseApp, { authService } from '../fbase';

...
const UserLoginState = authService.currentUser; //사용자 정보가 담김. default -> null
```
