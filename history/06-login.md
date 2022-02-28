# Log in

- firebase는 처음 애플리케이션을 로드할 때 currentuser를 읽어오는데에 시간이 걸림 -> 초기값에 authService.crrentUser을 삽입해도 바로 사용자 정보를 불러오지 않는다! (null로 반환)
