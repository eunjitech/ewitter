# Setup Firebase

- 2022.01 ver

## react-create-app 으로 리액트 프로젝트 시작

`npx create-create-app [project]`

## console.firebase.google.com

1. Create a project 클릭해 프로젝트 생성
2. Web 선택
3. Register App 클릭
4. Add firebase SDK _firebase 기본 설정_

## install firebase

`npm install --save firebase`

## create firebase folder and add firebase config

```javascript
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
```

_.env파일안에 데이터값 저장_
