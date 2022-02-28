# Creating account

- 사용자 가입, 이메일 인증

## Create User Info

```javascript
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
```

- user 가입 후 data를 받아올 수 있음

## setPersistence

- 사용자를 어떻게 보여줄 것인지 설정할 수 있음 (default: local)
- local은 브라우저를 닫더라도 사용자 정보를 기억함
