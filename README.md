# 프로젝트 실행방법
```
npm run up
```
* * *

# 디렉토리 구조

```bash
src
├── config
│   └── cors.js
├── conrtoller
│   ├── index.js
│   ├── patientController.js
│   └── userController.js
├── db
│   └──  connect.js
├── route
│   ├── index.js
│   ├── patientRouter.js
│   └── userRouter.js
├── util
│   ├── jwt.js
│   ├── loginCheck.js
│   ├── patient.js
│   ├── tokenValidCheck.js
│   └── logout.js
└── index.js
``` 
## config
---
설정 파일 폴더
> cors.js
- cors 설정 파일

## controller
---
API 요청을 처리하는 폴더
> index.js
- controller파일들을 모아 사용하기 쉽도록 도와주는 파일
> patientController.js
- 환자에 관련된(생성, 조회, 수정, 삭제) 요청을 처리하는 파일
> userController.js
- 사용자에 관련된(로그인, 로그아웃) 요청을 처리하는 파일

## db
---
db와 연결하는 풀을 만드는 폴더
> connect.js
- mysql과 연결할 수 있는 풀을 생성하고, db 요청을 수행할 수 있는 메소드를 지원하는 class가 작성된 파일

## route
---
API요청을 route하는 폴더
> index.js
- Router파일들을 모아 사용하기 쉽도록 도와주는 파일
> patientRouter.js
- 환자에 관련된(생성, 조회, 수정, 삭제) 요청을 route하는 파일
> index.js
- 사용자에 관련된(로그인, 로그아웃) 요청을 route하는 파일

## util
---
Controller에서 요청을 처리할 때 사용하는 함수들을 모은 폴더
> jwt.js
- JWT token 생성, 디코드 기능을 제공하는 파일
> loginCheck.js
- 로그인을 요청한 user의 정보(id, pw)가 유효한지 확인하는 파일
> logout.js
- JWT token을 무효화 하기 위해 db에 해당 토큰을 저장하는 파일
> patient.js
- 환자의 삽입, 삭제, 갱신, 조회를 처리하는 파일
> tokenValidCheck.js
- 로그아웃으로 인해 무효화된 토큰인지 검사하는 파일