## Features

### **User Registration**
- **Endpoint**: `POST /users/signup`
- **설명**: 새로운 유저를 등록합니다.
- **Request Body**:

```json
{
  "name": "test",
  "email": "test@example.com",
  "password": "password123"
}
```

### **User Login**
- **Endpoint**: `POST /users/signin`
- **설명**: 유저가 로그인하고 JWT 토큰을 발급받습니다.
- **Request Body**:

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### **How to Use**

1. `/users/signup` 엔드포인트를 통해 유저를 등록합니다.
2. `/users/signin` 엔드포인트에서 등록한 유저 정보로 로그인합니다.
3. 로그인 시 반환되는 **JWT** 토큰을 이후의 인증된 요청에 사용합니다.

---

## **Feed 관련 기능**

### **Feed 생성**

- **Endpoint**: `POST /feeds/create`
- **설명**: 로그인된 유저가 새 피드를 생성합니다. **JWT 토큰**을 통해 인증된 유저만이 피드를 생성할 수 있습니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **Request Body**:

```json
{
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "images": ["image1.jpg", "image2.jpg"]
}
```

- **Response**: 
  - 성공 시 201 상태 코드와 함께 생성된 피드 정보를 반환합니다.
  
---

### **Feed 수정**

- **Endpoint**: `PUT /feeds/update/:feedId`
- **설명**: 로그인된 유저가 자신이 작성한 피드를 수정합니다. 피드 작성자만 수정할 수 있습니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **URL Params**:
  - `feedId`: 수정하려는 피드의 고유 ID
- **Request Body**:

```json
{
  "title": "Updated Post",
  "content": "This is the updated content of my post.",
  "images": ["image1.jpg", "image2.jpg"]
}
```

- **Response**: 
  - 성공 시 200 상태 코드와 함께 수정된 피드 정보를 반환합니다.
  
---

### **Feed 삭제**

- **Endpoint**: `DELETE /feeds/delete/:feedId`
- **설명**: 로그인된 유저가 자신이 작성한 피드를 삭제합니다. 피드 작성자만 삭제할 수 있습니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **URL Params**:
  - `feedId`: 삭제하려는 피드의 고유 ID

- **Response**:
  - 성공 시 200 상태 코드와 함께 삭제 성공 메시지를 반환합니다.

---

### **Feed 조회 (피드 목록 및 조회수 증가)**

- **Endpoint**: `GET /feeds/user`
- **설명**: 로그인된 유저의 피드 목록을 조회합니다. 조회할 때마다 해당 피드의 조회수가 증가합니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **Query Parameters**:
  - `page`: 페이지 번호 (기본값: 1)
  - `size`: 페이지당 피드 수 (기본값: 5)
  - `sortBy`: 정렬 기준 (기본값: `createdAt`)

- **Response**: 
  - 성공 시 200 상태 코드와 함께 유저의 피드 목록과 조회수를 반환합니다.
  
---

## **좋아요 기능**

### **피드에 좋아요 추가**

- **Endpoint**: `POST /feeds/like/:feedId`
- **설명**: 로그인된 유저가 특정 피드에 좋아요를 추가합니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **URL Params**:
  - `feedId`: 좋아요를 추가할 피드의 고유 ID

- **Response**: 
  - 성공 시 200 상태 코드와 함께 좋아요가 추가된 피드 정보를 반환합니다.
  
---

### **피드에 좋아요 취소**

- **Endpoint**: `POST /feeds/unlike/:feedId`
- **설명**: 로그인된 유저가 특정 피드에 추가한 좋아요를 취소합니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **URL Params**:
  - `feedId`: 좋아요를 취소할 피드의 고유 ID

- **Response**: 
  - 성공 시 200 상태 코드와 함께 좋아요가 취소된 피드 정보를 반환합니다.
  
---

## **댓글 관련 기능**

### **댓글 작성**

- **Endpoint**: `POST /comments/create/:feedId`
- **설명**: 로그인된 유저가 특정 피드에 댓글을 작성합니다.
- **Headers**:
  - `Authorization`: `Bearer <your-access-token>`
- **URL Params**:
  - `feedId`: 댓글을 달 피드의 고유 ID
- **Request Body**:

```json
{
  "content": "This is a comment."
}
```

- **Response**: 
  - 성공 시 201 상태 코드와 함께 생성된 댓글 정보를 반환합니다.

---


각 API 요청에서 로그인 후 발급받은 **JWT 토큰**을 반드시 **Authorization 헤더**에 포함해야 합니다. Postman이나 다른 API 테스트 도구를 이용해 이 API들을 테스트할 수 있습니다.
