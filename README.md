
# 미니 게시판 with MinHo

## 구현한 기능
- 회원가입
- 로그인
- 회원가입/로그인 (비밀번호 암호화)
- JWT를 이용한 인증
- 유저 프로필 조회
- 리프레시 토큰 발급

## 사용 기술
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- TypeScript

## 사용 방법

### 회원가입
**POST /users/signup**

Request Body:
```json
{
  "name": "test",
  "email": "test@example.com",
  "password": "password123"
}
```

### 로그인
**POST /users/signin**

Request Body:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

## API 명세서

1. **회원가입**
   - **URL**: `/users/signup`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "name": "홍길동",
       "email": "gildong@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "회원가입 성공",
       "data": {
         "name": "홍길동",
         "email": "gildong@example.com"
       }
     }
     ```

2. **로그인**
   - **URL**: `/users/signin`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "email": "gildong@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "로그인 성공",
       "accessToken": "eyJhbGciOiJIUzI1NiIsInR...",
       "refreshToken": "eyJhbGciOiJIUzI1NiIsInR...",
       "data": {
         "email": "gildong@example.com"
       }
     }
     ```

3. **유저 프로필 조회**
   - **URL**: `/users/profile/:id`
   - **Method**: `GET`
   - **Response**:
     ```json
     {
       "message": "조회 성공",
       "data": {
         "name": "홍길동",
         "email": "gildong@example.com",
         "avatar": "N/A"
       }
     }
     ```

4. **리프레시 토큰 발급**
   - **URL**: `/users/refresh-token`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "refreshToken": "eyJhbGciOiJIUzI1NiIsInR..."
     }
     ```
   - **Response**:
     ```json
     {
       "accessToken": "eyJhbGciOiJIUzI1NiIsInR..."
     }
     ```


