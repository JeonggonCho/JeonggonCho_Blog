---
date: '2023-01-31'
title: '파이썬 가상환경'
category: 'python'
tags: [ 'python', 'programming', 'environment', 'venv', 'cmd' ]
thumbnail: './thumbnail.png'
---

# 가상환경

## 1. 가상환경

- 파이썬 표준 라이브러리가 아닌 외부 패키지와 모듈을 사용하는 경우
- 모두 pip를 통해 설치를 해야 함
- 복수의 프로젝트를 하는 경우, 버전이 상이할 수 있음
- 이러한 경우, 가상환경을 만들어 프로젝트 별로 독립적인 패키지를 관리할 수 있음

<br>

### 1-1. 파이썬 실행에 대한 이해

```bash
$ python <경로>
```

- python은 특정 경로에 있는 프로그램을 실행시키는 것

<br>

### 1-2. venv

- 가상 환경을 만들고 관리하는데 사용되는 모듈(Python 버전 3.5부터)
- 특정 디렉토리에 가상환경을 만들고, 고유한 파이썬 패키지 집합을 가질 수 있음
- 특정 폴더에 가상환경이(패키지 집합 폴더 등) 있고
- 실행 환경(예시-bash)에서 가상환경을 활성화 시켜
- 해당 폴더에 있는 패키지를 관리/사용함

<br>

### 1-3. 가상환경 생성

```bash
$ python -m venv <폴더명>
```

- 가상환경을 생성하면, 해당 디렉토리에 별도의 파이썬 패키지 폴더가 설치됨
- 주로 폴더명을 `venv`로 설정

<br>

### 1-4. 가상환경 활용

- 아래는 명령어를 통해 가상환경을 활성화
- <venv>는 가상환경을 포함하는 디렉토리 이름

| 플랫폼   | 셀               | 가상환경을 활성화하는 명령                     |
|-------|-----------------|------------------------------------|
| POSIX | bash/zsh        | $ source <venv>/bin/activate       |
|       | fish            | $ source <venv>/bin/activate.fish  |
|       | csh/tcsh        | $ source <venv>/bin/activate.csh   |
|       | PowerShell Core | $ <venv>/bin/Activate.ps1          |
| 윈도우   | cmd.exe         | C:\ <venv>\Scripts\activate.bat    |
|       | PowerShell      | PS C:\ <venv>\Scripts\activate.ps1 |

- 가상환경 비활성화는 `$ deactivate 명령어`를 사용

<br>

### 1-5. cmd와 bash 환경

```bash
$ source venv/Scripts/activate
```

- 가상환경 활성화/비활성화

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

