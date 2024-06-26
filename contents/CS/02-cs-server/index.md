---
date: '2023-01-31'
title: 'CS 서버'
category: 'computer_science'
tags: [ 'cs', 'server' ]
thumbnail: './thumbnail.png'
---

# 서버의 이해

## 목록

## 1. IP와 도메인은 무엇일까?

### 1-1. IP

- 컴퓨터는 네트워크를 이루며 서로 통신을 하고 정보를 주고 받게 된다. 따라서 특정 컴퓨터에게 정보를 보내기 위해서는 정보를 받을 컴퓨터를 지정해야하며 이를 위해 `모든 컴퓨터에게 고유한 주소가 부여`되는데
  이를 `IP주소(Internet Protocol)`라고 한다.

```
ex) 192.168.2.10.
```

<br>

### 1-2. 도메인

- 하지만 모든 IP주소를 일일이 기억하는 것은 어렵기 때문에 `이름을 지정하여 IP주소를 대체`하게 되는데 이를 `도메인 이름(Domain)`이라고 한다.

```
ex) google.com
```

<br>
<br>

## 2. 클라이언트와 서버는 무엇일까?

- 웹으로 연결된 컴퓨터는 클라이언트와 서버로 구분된다.

![클라이언트와 서버](cs_client,server.jpg)

<br>

### 2-1. 클라이언트

- 사용자들이 이용하는 장치 및 소프트웨어로 서버에 `정보를 요청`하게된다.

<br>

### 2-2. 서버

- 웹페이지, 사이트, 앱 등을 저장하는 컴퓨터로 클라이언트에서 접근을 요청하면 서버에서 클라이언트 장치로 `사본을 보내주게 된다.`

<br>
<br>

## 3. 정적 웹사이트와 동적 웹사이트의 차이점은 무엇일까?

### 3-1. 정적 웹사이트(Static sites)

- 정적 사이트는 요청이 입력되었을때, 서버에서 `미리 코딩 및 저장된 동일한 콘텐츠를 반환`한다.

| 장점                            | 단점                                               |
|-------------------------------|--------------------------------------------------|
| 고정된 자료를 반환하므로 빠르며, 비용이 적게 든다. | 한정적인 정보만 보여줄 수 있으며, 모든 정보를 수동으로 수정해야하기에 관리가 힘들다. |

<br>

### 3-2. 동적 웹사이트(Dynamic sites)

- 서버에 있는 데이터들을 요청에 의해 `가공 및 처리한 후, 생성된 콘텐츠를 반환`한다. 즉, 사용자의 상황, 시간, 요청에 따라서 결과값이 달라지게 된다.

| 장점                                                       | 단점                                                                  |
|----------------------------------------------------------|---------------------------------------------------------------------|
| 다양한 정보의 가공으로 결과물을 보여주기에 서비스가 다채로우며, 추가/수정/삭제 등 작업이 용이하다. | 정보의 가공으로 인해 상대적으로 서비스가 느리며, 정보처리를 위한 어플리케이션 서버가 추가로 필요하기에 비용이 더 든다. |

<br>
<br>

## 4. HTTP는 무엇이고, 요청과 응답 메세지 구성은 어떻게 되는가?

### 4-1. HTTP

- Hypertext Transfer Protocol(하이퍼텍스트 전송 규약)의 약자
- 클라이언트와 서버가 서로 통신할 수 있도록 `언어를 정의한 규약`

<br>

### 4-2. HTTP 구성

- 기본적으로 리소스를 식별하는 `URL` 과 필요한 작업을 정의하는 `메서드`로 이루어져 있다.
  그리고 `URL매개변수`, `POST 데이터` 또는 `인코딩된 추가 정보`를 포함할 수 있다.

<br/>

### - HTTP Request 구조

| 구조           | 설명                                                  | 예시                                                                                               |
|--------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Starter line | http method 종류, request target(url), http 버전 정보를 담음 | GET /test.html HTTP/1.1                                                                          |
| Headers      | Key:Value 값으로 해당 request에 대한 추가 정보를 담고 있음           | Host:Google.com<br/>Accept:text/html<br/>Accept-Encoding:gzip, deflate<br/>Connection:keep-alive |
| Blank line   | 빈 칸 처리하는 영역                                         |                                                                                                  |
| Body         | 해당 request가 전송하는 데이터가 담겨있는 부분으로 전송하는 데이터가 없으면 비어있음  | name=jeonggon&location=seoul                                                                     |

<br/>

- Request Headers 정보

| 키                 | 설명                                                                                     |
|-------------------|----------------------------------------------------------------------------------------|
| Host              | 요청하려는 서버 호스트 이름, 포트번호                                                                  |
| User-agent        | 클라이언트 프로그램 정보                                                                          |
| Referer           | 바로 직전에 머물렀던 웹 링크 주소                                                                    |
| Accept            | 클라이언트가 처리 가능한 미디어 타입 종류 나열                                                             |
| If-Modified-Since | 작성된 시간 이후로 변경된 리소스 취득<br/>페이지 수정 시, 최신 페이지로 교체                                         |
| Authorization     | 인증 토큰을 서버로 보낼 때 쓰이는 헤더                                                                 |
| Origin            | 서버로 POST 요청을 보낼 때 요청이 어느 주소에서 시작되었는지 나타내는 값<br/>이 값으로 요청을 보낸 주소와 받는 주소가 다르면 CORS 에러 발생 |
| Cookie            | 쿠키 값으로 Key-value로 표현됨<br/>Set-Cookie 헤더와 함께 서버로부터 이전에 전송되었던 저장된 HTTP 쿠키를 포함            |
| ...               | ...                                                                                    |

<br/>

### - HTTP Response 구조

| 구조          | 설명                                                          | 예시                                                                                        |
|-------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Status line | HTTP 버전, Status Code, Status Text을 나타냄                      | HTTP/1.1 200 OK                                                                           |
| Headers     | Request의 Headers와 동일함<br/>하지만 Response Headers에서만 쓰이는 값도 있음 | Date:Mon, 20, July ...<br/>Server:Apache<br/>Content-Length:20<br/>Content-Type:text/html |
| Blank line  | 빈 칸 처리하는 영역                                                 |                                                                                           |
| Body        | Response의 컨텐츠가 담김                                           | \<h2>Title\</h2>                                                                          |

<br/>

- Response Headers 정보

| 키                  | 설명                                                           |
|--------------------|--------------------------------------------------------------|
| Age                | max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려주는 값                         |
| Referer-policy     | 서버 referer 정책을 알려주는 값<br/>ex) origin, no-referer, unsafe-url |
| WWW-Authenticate   | 사용자 인증이 필요한 자원을 요구할 시, 서버가 제공하는 인증 방식                        |
| Proxy-Authenticate | 요청한 서버가 프록시 서버인 경우, 유저 인증을 위한 값                              |
| Set-Cookie         | 서버 측에서 클라이언트에게 쿠키 정보를 설정 (RFC 2965에서 규정)                     |
| ...                | ...                                                          |

<br/>

### 4-3. HTTP Method

- HTTP 메서드는 수행할 작업의 종류를 나타내기 위해 `서버에 보내는 메세지`
- 해당 메서드를 통해 브라우저와 서버 간의 더 풍부한 통신이 가능해짐
- 일반적으로 GET과 POST가 가장 많이 사용됨

| 메서드    | 내용                                      |
|--------|-----------------------------------------|
| GET    | 어떠한 데이터를 서버에서 받아 올 때, 사용                |
| POST   | 일반적으로 무언가를 생성하기 위해 서버에 데이터 블록을 수락하도록 요청 |
| PUT    | 데이터를 업데이트 할 때, 사용                       |
| DELETE | 데이터를 서버에서 삭제할 때, 사용                     |

<br/>

### - GET Method

- `URL 매개변수`를 사용하여 서버에 데이터를 요청
- 요청 매개변수는 `이름-값`의 쌍으로 형식이 지정됨

```
GET의 매개변수 예시

www.google.com/search?q=nodejs
```

- 쿼리 매개변수 q를 사용하여 nodejs에 대한 결과를 Google에 요청
- GET 요청은 다음 사항을 수행 할 수 있음
    1. 서버에서 데이터 검색 - 일반적인 웹페이지
    2. 길이 제한이 있는 서버로 데이터 보내기
    3. 브라우저 기록에 남음
    4. 캐시가 됨
- 다음은 수행할 수 없음
    1. 민감한 데이터(예시. 비밀번호, 신용카드 정보) 처리
    2. 서버에서 데이터 수정

<br/>

### - POST Method

- `리소스(데이터 베이스의 레코드)를 변경`하기 위해 서버에 데이터를 보냄
- 해당 POST 데이터는 사용자가 볼 수 없는 요청 본문으로 전송됨

```
POST 요청 예시

POST /posts/1 HTTP/1.1
```

- POST 요청은 다음 사항을 수행 할 수 있음
    1. 리소스 데이터, 즉 서버의 데이터 수정
    2. 민감한 데이터를 처리하는데 사용
    3. 길이 제한 없는 데이터 보내기
- 다음은 수행할 수 없음
    1. 캐시에 저장
    2. 브라우저 기록에 남기기

<br/>

### - PUT Method vs PATCH Method

- 둘 다 공통적으로 `데이터를 수정`하기 위해 사용됨
- `PUT`은 데이터 `전체`를 교체하며 데이터 교체 시, 모든 필드가 필요함
- `PATCH`는 데이터 `부분`을 교체하며 데이터 교체 시, 일부 필드가 필요함

```JSON
// 유저 정보가 있을 경우 이메일 변경 예시
// /users/1

{
  "username": "jeonggon",
  "email": "a123@naver.com"
}
```

```
PUT으로 이메일 바꿀 경우

{
  "username": "jeonggon",
  "email": "a123@gmail.com"
}
```

```
PATCH로 이메일 바꿀 경우

{
  "email": "a123@gmail.com"
}
```

<br/>

### 4-4. Stateless Protocol

- Stateless는 HTTP의 특징
- 여러 요청이 지속되는 동안 요청을 보낸 각 `유저에 대한 정보(information) 또는 상태(status)를 서버가 기억할 필요가 없음`
- 요청에 대한 연결을 재설정하는데에 소요되는 시간/대역폭을 최소화하여 `성능을 최적화하기 위함`
- 서버의 첫 요청을 받은 후에도 유저가 누구인지 서버가 기억하려면 `인증절차(Token)`가 필요함

<br/>

### 4-5. HTTP Status Codes

- 브라우저의 요청에 따라 서버에서 반환되는 코드
- 코드 번호를 통해 요청이 성공했는지, 오류가 있는지 확인할 수 있음
- 오류의 경우, 찾을 수 없음, 액세스 불가, 이동됨 등의 오류 유형을 지정함

| 상태 코드     | 설명                              |
|-----------|---------------------------------|
| 100 - 199 | 정보 코드(information codes)        |
| 200 - 299 | 성공 코드(success codes)            |
| 300 - 399 | 리다이렉션 코드(redirection codes)     |
| 400 - 499 | 클라이언트 에러 코드(client error codes) |
| 500 - 599 | 서버 에러 코드(server error codes)    |

<br/>

### - (100 - 199) 정보 코드

- 요청에 대한 정보 메세지를 반환하는 상태 코드

| 상태 코드                   | 설명                                            |
|-------------------------|-----------------------------------------------|
| 100 Continue            | 요청 헤더를 수신했으며, 클라이언트가 요청 본문을 보낼 수 있도록 함        |
| 101 Switching Protocols | 요청자가 프로토콜의 서버 전환을 요청함                         |
| 103 Checkpoint          | 중단된 PUT 또는 POST 요청을 재개하기 위한 재개 가능한 요청 옵션을 표시함 |
| ...                     | ...                                           |

<br/>

### - (200 - 299) 성공 코드

- 성공적인 요청을 나타내는 상태 코드

| 상태 코드          | 설명                                                     |
|----------------|--------------------------------------------------------|
| 200 OK         | 성공적인 HTTP 요청에 대한 표준 응답                                 |
| 201 Created    | 요청이 성공적이였으며, 새로운 리소스가 생성됨<br/>주로 PUT, POST 요청 이 후, 따라옴 |
| 204 No Content | 반환된 컨텐츠 없이 요청이 성공함                                     |
| ...            | ...                                                    |

<br/>

### - (300 - 399) 리다이렉션 코드

- 리다이렉션과 관련된 알림을 나타내는 상태 코드

| 상태 코드                 | 설명                       |
|-----------------------|--------------------------|
| 301 Moved Permanently | 요청한 리소스의 URI가 변경되었음을 의미함 |
| ...                   | ...                      |

<br/>

### - (400 - 499) 클라이언트 오류 코드

- 클라이언트로 인해 발생한 오류를 나타내는 상태 코드

| 상태 코드            | 설명                                                                |
|------------------|-------------------------------------------------------------------|
| 400 Bad Request  | 잘못된 문법으로 서버가 요청을 이해할 수 없음                                         |
| 401 Unauthorized | 요청은 유효하나 실패한 인증으로 서버가 응답하지 않음                                     |
| 403 Forbidden    | 클라이언트가 컨텐츠에 접근할 권리를 가지고 있지 않음<br/>401과의 차이는 로그인은 되었으나 권한이 거절된 상황임 |
| 404 Not Found    | 요청한 페이지를 서버에서 찾을 수 없음                                             |
| 409 Conflict     | 요청이 현재 서버 상태와 충돌될 때 보냄                                            |
| ...              | ...                                                               |

<br/>

### - (500 - 599) 서버 오류 코드

- 서버에서 오류가 발생했음을 나타내는 상태 코드

| 상태 코드                     | 설명                                                              |
|---------------------------|-----------------------------------------------------------------|
| 500 Internal Server Error | 오류를 특정할 수 없을 때, 표시되는 일반 오류 메세지                                  |
| 503 Service Unavailable   | 서버가 요청을 처리할 준비가 되지 않음<br/>일반적인 원인은 유지보수를 위한 작동 중지 또는 과부하의 경우 발생 |
| ...                       | ...                                                             |

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

