---
date: '2023-01-26'
title: 'CS REST API'
category: 'computer_science'
tags: [ 'cs', 'REST_API', 'API' ]
thumbnail: './thumbnail.png'
---

# REST API

## (1) REST API란?

REST (Representational State Transfer) API는 웹 서비스를 위한 아키텍처 스타일 중 하나로, 네트워크를 통해 클라이언트와 서버 간에 `데이터를 교환하는 방식`을 정의한다.

REST API는 `HTTP 프로토콜을 기반`으로 하며, 주로 XML이나 `JSON 형식`의 데이터를 사용하여 클라이언트와 서버 간의 통신을 수행한다.

<br>
<br>

## (2) REST API의 주요 특징

1. 자원(Resource)<br>: REST API는 `서버에 있는 모든 것`을 자원으로 간주한다.

2. URI (Uniform Resource Identifier)<br>: 자원은 고유한 식별자를 가지고 있어야 합니다. 이를 URI로 표현하며, 클라이언트는 `URI를 사용하여 자원에 접근`한다.

3. HTTP 메소드(Method) - 행위<br>: REST API는 HTTP 메소드를 사용하여 자원에 대한 동작을 정의한다. 주요 HTTP 메소드는 `GET, POST, PUT, DELETE` 등이 있다. 예를
   들어, `GET` 메소드는 자원의 `조회`, `POST` 메소드는 자원의 `생성`, `PUT` 메소드는 자원의 `수정`, `DELETE` 메소드는 자원의 `삭제`를 의미한다.

4. 상태 없음(Stateless)<br>: REST API는 상태를 관리하지 않는다. 클라이언트의 각 요청은 서버에 독립적으로
   처리되며, `클라이언트의 상태(ex.세션 정보나 쿠키정보 등)는 서버에 저장되지 않는다.` 클라이언트는 필요한 모든 정보를 요청에 포함시켜야 한다.

5. 데이터 포맷<br>: REST API는 주로 XML이나 `JSON 형식`의 데이터를 사용하여 클라이언트와 서버 간의 데이터를 교환한다. 이를 통해 데이터의 `표준화와 유연성이 확보`된다.

6. 캐싱<br>: REST API는 캐싱을 통해 성능을 향상시킬 수 있다. 서버는 응답에 캐시 헤더를 추가하여 클라이언트가 `동일한 요청을 반복해서 보낼 때 중복 작업을 피하고 응답 시간을 줄일 수 있다.`

7. 계층형 구조<br>: REST API는 `계층 구조`를 가질 수 있다. 예를 들어, 로드 밸런서, 게이트웨이, 서버, 데이터베이스 등으로 구성된 다층 아키텍처를 사용할 수 있다.

<br>
<br>

## (3) REST API의 장점

1. 간결하고 단순한 인터페이스<br>: REST API는 `HTTP 메소드`를 사용하여 자원에 대한 동작을 정의하기 때문에 간결하고 단순한 인터페이스를 가지고 있다. 이로써 개발자들은
   API를 `쉽게 이해하고 사용`할 수 있다.

2. 확장 가능성<br>: REST API는 `계층 구조`를 가지고 있어 서버의 부하를 분산하거나, 캐싱을 통해 성능을 향상시키는 등의 확장 가능한 아키텍처를 구성할 수 있다.

3. 유연성과 범용성<br>: REST API는 다양한 데이터 포맷을 지원하며, HTTP 프로토콜을 사용하기 때문에 다양한 클라이언트와 서버 간의 상호 운용성이 높아 유연하게 활용할 수 있다. 또한, 웹 브라우저,
   모바일 앱, 다른 서버 등 다양한 클라이언트에서 사용할 수 있어 범용성이 뛰어나다.

4. 캐싱을 통한 성능 향상<br>: REST API는 캐싱을 통해 성능을 향상시킬 수 있다. 서버가 응답에 캐시 헤더를 추가하여 클라이언트가 동일한 요청을 반복해서 보낼 때 중복 작업을 피하고 응답 시간을 줄일 수
   있다.

5. 보안<br>: REST API는 HTTPS와 같은 `보안 프로토콜을 사용`하여 데이터의 안전한 전송을 보장할 수 있다.

이와 같이 REST API는 간결하고 단순한 인터페이스, 확장 가능성, 유연성과 범용성, 캐싱을 통한 성능 향상, 보안, 개발자 친화적인 특징을 가지고 있다. 이를 통해 REST API는 다양한 클라이언트와 서버
간의 상호 운용성을 높이고, 웹 서비스를 효율적으로 개발하고 통합하는데 사용된다.

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

