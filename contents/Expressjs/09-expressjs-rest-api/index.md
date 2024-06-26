---
date: '2024-03-15'
title: 'Express.js RESTful API'
category: 'express'
tags: [ 'expressjs', 'framework', 'server', 'REST', 'API' ]
thumbnail: './thumbnail.png'
---

# RESTful API

## 1. RESTful API란?

- 두 컴퓨터 시스템이 인터넷을 통해 `정보를 안전하게 교환`하기 위해 사용하는 인터페이스
- 즉, 통신을 할 때, 안전하고 효율적인 방법을 위해 사용되는 것

<br/>

### 1-1. REST

- REST는 Representational State Transfer의 약자로 인터넷과 같이 `복잡한 네트워크에서 통신을 관리하기 위한 지침`
- 해당 지침을 통해 대규모 고성능 통신을 안정적으로 지원할 수 있음
- `"RESTful 하다"`는 지침을 잘 지켜서 개발하였음을 의미함

<br/>

### 1-2. 지침

### - 적절한 메서드 사용

- HTTP 메서드와 같이 GET, POST, PUT, DELETE 등의 메서드를 적절하게 사용해서 요청을 보내야 한다는 지침

| 메서드    | 설명                                                                      |
|--------|-------------------------------------------------------------------------|
| GET    | 어떠한 데이터를 서버로부터 `받아올 때`, 사용                                              |
| POST   | 일반적으로 무언가를 `생성하기 위해` 서버에 데이터 블록을 수락하도록 요청<br/>헤더의 본문(body)에 데이터를 담아서 보냄 |
| PUT    | 데이터를 `업데이트 할 때`, 사용                                                     |
| DELETE | 데이터를 서버에서 `삭제할 때`, 사용                                                   |

<BR/>

### - URL에서 슬래시('/')와 하이픈('-')

- 슬래시는 구분자로서 계층 관계를 나타냄
- 경로 마지막에는 슬래시를 사용하지 않기
- 밑줄('_')보다는 하이픈('-') 사용하기

```
적절한 슬래시와 하이픈 사용

http://google.com/users/1/update
http://google.com/users/1/user-profile
```

```
RESTful 하지 않은 슬래시 사용

= 계층이 잘 지켜지지 않고 밑줄 및 마지막에 슬래시 사용함

http://google.com/update/1/users/
http://google.com/user_profile/users/1/
```

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

