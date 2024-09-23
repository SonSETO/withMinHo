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
**POST /users/signin

Request Body:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
