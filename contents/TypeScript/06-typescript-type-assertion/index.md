---
date: '2024-01-09'
title: 'TypeScript 타입 추론'
category: 'typescript'
tags: [ 'typescript', 'programming', 'variable' ]
thumbnail: './thumbnail.png'
---

# 타입 추론

## 1. 타입 추론

### 1-1. 변수 선언과 동시에 값을 할당하는 경우

- intellisense의 도움을 받을 수 있음
- 변수명에 hover시, 타입을 값에 기반하여 자동으로 추론함

<p align="center">
  <img src="TS_type_assertion2.png" alt="타입추론1"><br/>
  <span>자동으로 타입 추론</span>
</p>

<br/>

- 변수명 뒤에 점(.)을 찍어 메서드를 실행하려할 경우, 값의 타입에 사용되는 메서드들을 자동으로 추천해줌

<p align="center">
  <img src="TS_type_assertion1.png" alt="타입추론2"><br/>
  <span>타입에 맞는 메서드 추천</span>
</p>

<br>

### 1-2. 변수 선언하고 따로 값을 할당하는 경우

- intellisense의 도움을 못 받음
- 변수의 타입을 추론 불가능
- IDE 종류 및 버전에 따라 차이가 있음

<p align="center">
  <img src="TS_type_assertion3.png" alt="타입추론3"><br/>
  <span>타입 추론 불가능</span>
</p>

<br>

### 1-3. 타입 변환을 진행할 경우

- intellisense의 도움을 받을 수 있음
- 앞선 변수 선언과 값 할당을 따로 하는 경우일지라도 다시 타입 추론 및 메서드 추천이 가능
- IDE 종류 및 버전에 따라 차이가 있음

```typescript
let len1 = (<string>what).length;
let len2 = (what as string).length;
```

<br>

### - 타입 변환 방법

1. `< >` 사용법

- '<변환할 타입>변수명'으로 작성
- ex) \<number>num

2. `as` 사용법

- '변수명 as 변환할 타입'으로 작성
- ex) num as number

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

