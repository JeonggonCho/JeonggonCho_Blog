---
date: '2022-12-28'
title: 'GitHub'
category: 'git'
tags: [ 'git', 'DVCS' ]
thumbnail: './thumbnail.png'
---

# GitHub

## 1. 원격저장소(Remote Repository)

- 원격저장소를 제공하는 서비스는 다양하며 주로 `GitHub`를 활용한다.

ex) GitHub, GitLab, Bitbucket 등...

<br>
<br>

## 2. GitHub

> GitHub는 Git과 마찬가지로 `버전을 관리`한다.

<br>
<br>

## 3. 명령어

### 3-1. 초기 원격저장소 설정하기

1. GitHub 홈페이지에서 `'New Repository'`를 클릭한다.
2. 저장소의 이름 및 저장소의 설명, 공개여부를 `설정`하고 저장소를 생성한다.
3. `'URL'`을 확인한다. -> https:// github.com/`GitHub 유저 이름`/`저장소 이름`.git
4. 위 3번의 주소를 이용하여 로컬저장소에 원격저장소의 정보를 설정한다. 로컬저장소에는 한번만 설정하면 된다.

```bash
$ git remote add origin https://github.com/GitHub 유저 이름/저장소 이름.git
  (원격저장소를) (추가해) (origin으로)

<중요!> 만약 '다른 원격저장소'를 설정하고 싶다면, '기존에 설정된 원격저장소를 제거'하고
다시 원하는 원격저장소로 설정하여야 한다.

- 원격저장소 삭제하기

$git remote remove <저장소 이름>
```

<br>

### 3-2. 원격저장소 정보 확인하기

```bash
$ git remote -v

여기서 'v'는 '말이 많은'을 뜻하는 'verbose'의 약자이다.
```

<br>

### 3-3 Push

- 로컬 저장소의 커밋된 버전을 원격저장소로 올린다.

<주의!> 클라우드 시스템과 달리 원격저장소는 로컬 폴더의 `파일/폴더가 아닌 저장소의 버전(커밋)을 관리`하는 것이다.

```
$ git push <원격저장소 이름> <브랜치 이름>

주로 $ git push 'origin' 'master'
```

<br>

### 3-4 Pull

- 원격저장소의 버전을 로컬저장소로 가져온 후, 받아온 변경 내역을 병합한다.

```
$ git pull <원격저장소 이름> <브랜치 이름>

주로 $ git pull 'origin' 'master'
```

<br>

### 3-5 Clone

- 타인의 원격저장소를 복제하여 가져와 작업에 참여 및 협업 할 수 있다.

```
$ git clone <원격저장소 주소>
```

<br>
<br>

## 4. 버전관리와 상관없는 파일 처리

- 일반적인 개발 프로젝트에서 `버전관리를 별도로 하지 않는 파일/디렉토리`가 발생한다.
- Git 저장소에 `'.gitignore 파일'`을 생성하고 해당 내용을 관리한다.
- 편하게 설정하기위해 [.gitignore 설정사이트](https://gitignore.io)를 활용한다.

```bash
ex)

- 특정 파일 : a.txt(a텍스트파일), test/a.txt(test폴더의 a텍스트파일)
- 특정 디렉토리 : /my_secret
- 특정 확장자 : *.exe ㅡ> 여기서 '(*)'는 '모든'을 의미한다.
- 예외 처리 : !b.exe

<주의!> 이미 커밋된 파일은 반드시 삭제하여야 .gitignore로 적용된다.
따라서 프로젝트 시작전 미리 설정해둘 필요가 있다.
```

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- SEO 기본 가이드)

[//]: # ()

[//]: # (  [<https://support.google.com/webmasters/answer/7451184?hl=ko&ref_topic=9460495>]&#40;<https://support.google.com/webmasters/answer/7451184?hl=ko&ref_topic=9460495>&#41;)