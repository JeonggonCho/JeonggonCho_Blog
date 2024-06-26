---
date: '2023-01-02'
title: 'CS Request PUT, PATCH'
category: 'computer_science'
tags: [ 'cs', 'request', 'put', 'patch' ]
thumbnail: './thumbnail.png'
---

# PUT, PATCH 비교

> HTTP 메서드 중 "PUT"과 "PATCH"는 둘 다 서버에 `데이터를 업데이트`하기 위해 사용되는 메서드로, RESTful API를 통한 웹 서비스 개발에서 자주 사용된다. 그러나 "PUT"과 "PATCH"
> 는 `목적`과 `동작 방식`에서 차이가 있다.

<br>

## (1) PUT

사용예시) 블로그 글수정(title, content), 제품정보(name, price, category, description) 등 ...

: "PUT" 메서드는 `전체 리소스`를 업데이트하는 데 사용된다. 즉, 클라이언트가 서버에 전체 데이터를 제공하여 `기존 리소스를 완전히 대체`한다.
클라이언트가 전송한 데이터로 기존 리소스를 완전히 덮어씌우기 때문에, `클라이언트가 변경하지 않은 필드의 값도 모두 업데이트`된다.

만약 해당 리소스가 서버에 `존재하지 않는 경우`, "PUT" 메서드는 `새로운 리소스를 생성`한다.

"PUT" 메서드는 요청이 `반복적으로 호출`되어도 `동일한 결과`가 나와야 합니다. 즉, 멱등성을 가지고 있습니다.

<br>
<br>

## (2) PATCH

사용예시) 프로필이미지 변경(이미지url), 주문상태(status) 등 ...

: "PATCH" 메서드는 `리소스의 일부`를 업데이트하는데 사용된다. 즉, 클라이언트가 서버에 변경하고자 하는 부분만을 전송하여 업데이트한다.

클라이언트가 전송한 데이터로 기존 리소스의 일부를 업데이트하기 때문에, 클라이언트가 변경하지 않은 필드의 값은 변경되지 않는다.

만약 해당 리소스가 서버에 `존재하지 않는 경우`, "PATCH" 메서드는 `오류를 반환`하거나, `새로운 리소스를 생성하지 않는다.`

"PATCH" 메서드는 요청이 `반복적으로 호출`되면 `동일한 결과가 나오지 않을 수 있다.` 즉, 멱등성을 보장하지 않습니다.

<br>
<br>

`* 멱등성` : 여러 번 연산을 하더라도 결과가 달라지지 않는 성질

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

