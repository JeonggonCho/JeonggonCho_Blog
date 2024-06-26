---
date: '2024-01-09'
title: 'TypeScript 기본 특징'
category: 'typescript'
tags: [ 'typescript', 'programming', 'syntax', 'keyword' ]
thumbnail: './thumbnail.png'
---

# TypeScript 기본 특징

## 1. 기본 특징

- 인터페이스(Interfaces)

    - 인터페이스를 통해서 엔터티(entity) 형태의 새로운 데이터 타입 정의
    - 기본 규칙 정의

- 클래스(Classes)

    - 일반적인 OOP 특징을 가짐
    - JavaScript의 차후 버전과 호환됨

- 제네릭(Generics)

    - 가볍고 재사용 가능한 코드 생성

- 모듈(Modules)

    - 관련된 인터페이스, 클래스, 함수 등을 묶어서 관리
    - 전역(Global) 스코프에서 작성된 코드 분리

<br>

### 1-1. 키워드 종류

| 키워드            | 설명                                                             |
|----------------|----------------------------------------------------------------|
| class          | 클래스 : 멤버 포함(필드, 생성자, 속성, 메서드(함수))                              |
| constructor    | 생성자(클래스 초기화)                                                   |
| export         | 모듈 내에 모듈 밖에서도 호출(public)되는 멤버 생성                               |
| extends        | 상속 시, 사용(Java에서의 extends와 동일)                                  |
| implements     | 인터페이스 구현 코드                                                    |
| import         | 모듈에 포함(네임스페이스) : 네임스페이스 축약형 생성<br/>import abc = Namespace.Sub; |
| interface      | 인터페이스 : 코드 규약(계약, 표준) 정의                                       |
| module         | 컨테이너(클래스 또는 모든 코드)                                             |
| public/private | 액세스 접근 한정자(Member visibility)                                  |
| =>             | this 키워드 범위 내에서의 함수 구문 표현 : 람다식(ES6 특징)                        |
| :              | 형식 지정 구분자                                                      |
| ...            | 트리플 닷(나머지 매개변수 문법)                                             |
| <type name>    | 형식 변환(Cast/Convert)                                            |

<br>
<br>

## 2. 기본 문법

### 2-1. Syntax

- `//` : 한 줄 주석처리
- `/* */` : 여러 줄 주석처리
- `들여쓰기` : 공백 4칸
- `공백(whitespace)` : 프로그래밍에서 공백은 무시됨
- `\(특수문자)` : 특수문자 이스케이프 시퀀스

```typescript
// 문법(syntax): 문법은 반드시 지켜야하는 규칙이고 스타일은 프로그램 작성에 대한 가이드라인
console.log("명령 프롬프트에 출력할 내용");

// 줄바꿈은 \n을 이용
console.log("*\n**\n***");

// 주석문(코드 설명문)

// 들여쓰기
{
  console.log("들여쓰기는 공백 4칸을 사용");
}

// 공백(whitespace)
{
  console.log("공백은    무시됨");
}

// 여러 줄 주석
/*
    여러 줄 주석
    여러 줄 주석
 */

// 특수문자: 이스케이프 시퀀스
// 백슬래쉬 이용
console.log('" 큰따옴표');
console.log("' 작은따옴표");
```

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

