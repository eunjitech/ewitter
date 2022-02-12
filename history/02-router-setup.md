# Router setup

- 사용자의 로그인 상태에 따라 나타낼 페이지 경로 설정
- react-router-dom v6

## install react router dom

`npm i react-router-dom`

## Add router file - 로그인 페이지 or 메인페이지

```javascript
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/*" element={<Home />} />
        ) : (
          <Route path="/*" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};
```

- Router은 HashRouter, BrowserRouter이 있음
- Switch 대신 Routes로 변경
- exact 대신 path 뒤에 \*을 삽입
- Route 요소 안에 컴포넌트 삽입 대신 **element={<컴포넌트/>}**
