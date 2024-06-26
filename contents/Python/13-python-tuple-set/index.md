---
date: '2023-01-17'
title: '파이썬 튜플, 세트'
category: 'python'
tags: [ 'python', 'programming', 'tuple', 'set' ]
thumbnail: './thumbnail.png'
---

# 튜플, 세트

## 1. 튜플(Tuple)

### 1-1. 튜플의 정의

```python
(요소1, 요소2, 요소3, ...)
```

- 불변한 값들의 나열
- 순서를 가지며, 서로 다른 타입의 요소를 가질 수 있음
- 변경 불가능(immutable)하며, 반복 가능함(iterable)
- 항상 소괄호 형태로 정의하며, 요소는 콤마로 구분

<br>

### 1-2. 생성과 접근

- 소괄호(()) 혹은 tuple()을 통해 생성
- 값에 대한 접근은 리스트와 동일하게 인덱스로 접근
    - 값 변경은 불가능하여 추가 / 삭제도 불가능함

```python
# ex)

# 값 접근, 인덱스로 접근 가능
a = (1, 2, 3, 1)

print(a[1])

# 출력
# 2

# 값 변경은 불가능, 타입에러 발생
a[1] = '3'

# 출력
# TypeError: 'Tuple' object does not support item assignment
```

<br>
<br>

## 2. 세트(Set)

### 2-1. 세트의 정의

```python
{요소1, 요소2, 요소3, ...}
```

- 유일한 값들의 모음(collection)
- 순서가 없고 중복된 값이 없음
    - 수학에서의 집합과 동일한 구조를 가지며, 집합 연산도 가능
- 변경 가능(mutable)하고, 반복 가능함(iterable)
    - 단, 세트는 순서가 없기에 반복의 결과가 정의한 순서와 다를 수 있음

<br>

### 2-2. 세트 생성

- 중괄호({}) 혹은 set()을 통해 생성
    - 빈 Set를 만들기 위해서는 set()을 반드시 활용해야 함
    - 중괄호({})를 사용하면 빈 딕셔너리를 나타내기 때문
- 순서가 없어 별도의 값에 접근하는 것은 불가능함

```python
# ex)

# 중복값 제거
a = {1, 2, 3, 1, 2}
print(a)

# 출력
# {1, 2, 3}

-----------------------------------------------------

# 타입확인
a = {1, 2, 3, 1, 2}
print(type(a))

# 출력
# <class 'set'>

-----------------------------------------------------

# 빈 set 만들기, 반드시 set() 활용
a = {}
b = set()

print(type(a))
print(type(b))

# 출력
# <class 'dict'>  빈 중괄호({})는 딕셔너리로 생성됨
# <class 'set'>

-----------------------------------------------------

# 순서는 임의 조정

a = {'hello', 1, 2}
print(a)

# 출력
# {1, 2, 'hello'}

-----------------------------------------------------

# 인덱스 접근 불가, 타입에러 발생함

a = {1, 2, 3}
print(a[0])

# 출력
# TypeError: 'set' object is not subscriptable
```

<br>

### 2-3. 세트 추가/삭제

| 문법          | 설명            |
|-------------|---------------|
| s.add(x)    | 세트 s에 값 x를 추가 |
| s.remove(x) | 세트 s에 값 x를 삭제 |

```python
# ex)

# 값 추가
a = {1, 2, 3}

a.add(5)  # 값이 추가됨
a.add(1)  # 중복된 값이 들어오기에 무시됨

print(a)

# 출력
# {1, 2, 3, 5}

-----------------------------------------------------

# 값 제거
a = {1, 2, 3}

a.remove(1)

print(a)

a.remove(5)

# 출력
# {2, 3}
# KeyError: 5 # 없는 값을 삭제하고자 하면 KeyError 발생
```

<br>

### 2-4. 세트 연산

| 종류    | 문법                                             | 설명                                    |
|-------|------------------------------------------------|---------------------------------------|
| 합집합   | set1.union(set2) 또는 set1 \| set2               | 두 개의 세트를 합쳐 새로운 세트를 생성한다.             |
| 차집합   | set1.difference(set2) 또는 set1 - set2           | 한 세트에서 다른 세트를 뺀 새로운 세트를 생성한다.         |
| 교집합   | set1.intersection(set2) 또는 set1 & set2         | 두 세트에서 공통된 원소로 새로운 세트를 생성한다.          |
| 대칭차집합 | set1.symmetric_difference(set2) 또는 set1 ^ set2 | 두 세트 중 어느 한 쪽에만 속하는 원소로 새로운 세트를 생성한다. |

```python
# ex)

# 합집합

set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1.union(set2)
# 또는
union_set = set1 | set2

print(union_set)

# 출력
# {1, 2, 3, 4, 5}

-----------------------------------------------------

# 차집합

set1 = {1, 2, 3}
set2 = {3, 4, 5}

difference_set = set1.difference(set2)
# 또는
difference_set = set1 - set2

print(difference_set)

# 출력
# {1, 2}

-----------------------------------------------------

# 교집합

set1 = {1, 2, 3}
set2 = {3, 4, 5}

intersection_set = set1.intersection(set2)
# 또는
intersection_set = set1 & set2

print(intersection_set)

# 출력
# {3}

-----------------------------------------------------

# 대칭차집합

set1 = {1, 2, 3}
set2 = {3, 4, 5}

symmetric_difference_set = set1.symmetric_difference(set2)
# 또는
symmetric_difference_set = set1 ^ set2

print(symmetric_difference_set)

# 출력
# {1, 2, 4, 5}

```

<br>

### 2-5. 세트 활용

- 세트를 활용하면 컨테이너에서 중복된 값을 쉽게 제거할 수 있다.
    - 단, 순서가 임의로 조정되기에 순서가 중요한 경우에는 사용할 수 없다.

```python
# ex) 아래 리스트에서 고유한 지역 개수는?

li = ['서울', '서울', '광주', '부산', '광주', '대구']

set_li = set(li)  # set으로 중복제거
print(set_li)

answer = len(set_li)  # 길이 반환
print(answer)

# 출력
# {'광주', '대구', '부산', '서울'}
# 4
```

<br>

### 2-6. 세트 연산의 시간 복잡도

| 연산 종류 | 시간 복잡도 |
|-------|--------|
| 탐색    | O(1)   |
| 제거    | O(1)   |
| 합집합   | O(N)   |
| 교집합   | O(N)   |
| 차집합   | O(N)   |
| 대칭차집합 | O(N)   |

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- SEO 기본 가이드)

[//]: # ()

[//]: # (  [<https://support.google.com/webmasters/answer/7451184?hl=ko&ref_topic=9460495>]&#40;<https://support.google.com/webmasters/answer/7451184?hl=ko&ref_topic=9460495>&#41;)