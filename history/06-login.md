# Log in

- firebase는 처음 애플리케이션을 로드할 때 currentuser를 읽어오는데에 시간이 걸림 -> 초기값에 authService.crrentUser을 삽입해도 바로 사용자 정보를 불러오지 않는다! (null로 반환)
  -> useEffect, onAuthStateChanged 활용

## onAuthStateChanged

```javascript
const [init, setInit] = useState(false); //애플리케이션 초기화
const [isLoggedIn, setIsLoggedIn] = useState(false);
const auth = getAuth();
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    //로그인 정보가 있는지(인증상태가 null에서 바뀌었는지)
    setInit(true);
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
}, [auth]); //auth 상태가 바뀔 때 마다 실행
```

## return Error message

```javascript
const [error, setError] = useState("");

...
if (newAccount) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('errorCode ', errorCode, ' : ', errorMessage);

          setError(errorMessage); //에러 메시지를 error에 업데이트
        });
```
