# 미니 게시판 with MinHo

## Features
- User Registration
- User Login
- Password encryption for registration/login
- JWT-based authentication
- User profile retrieval
- Refresh token issuance

## Technologies Used
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- TypeScript

## Usage

### User Registration
**POST /users/signup**

Request Body:
```json
{
  "name": "test",
  "email": "test@example.com",
  "password": "password123"
}
```

### User Login
**POST /users/signin**

Request Body:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### How to Use
1. Register a user via `/users/signup`.
2. Log in with the registered credentials via `/users/signin`.
3. Use the JWT token returned from login for authenticated requests.
