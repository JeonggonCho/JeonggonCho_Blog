---
date: '2024-06-05'
title: '블로그 개발 - favicon 출력하기'
category: 'blog'
tags: [ 'blog', 'project', 'gatsby', 'favicon', 'tab' ]
thumbnail: './thumbnail.png'
---

# favicon

파비콘(favicon)이란 favorite icon의 줄임말로서 웹사이트에서 사용되는 `대표 아이콘 이미지`이다. 주로 브라우저의 탭이나 즐겨찾기 아이콘으로 표시된다.

<br/>

<p align="center">
    <img src="example.png" alt="favicon 예시"><br/>
    <span>내 블로그의 favicon</span>
</p>

<br/>

파비콘은 사용자에게 사이트 탐색 시, 시각적인 요소를 제공하여 `사용자 경험을 향상` 시키고, 검색 엔진의 경우, `검색 결과에 파비콘을 노출`시켜 검색 엔진 최적화에 간접적으로
영향을 미친다.

<br/>
<br/>

## 1. favicon 출력방법

### 1-1. gatsby-plugin-manifest

해당 라이브러리는 `PWA(Progressive Web App, 모바일에서 웹을 앱처럼 사용할 수 있게 하는 기술)`를 지원하기 위해 필요한 `manifest.webmanifest` 파일을 생성한다.

이 파일에는 프로젝트의 이름, 아이콘, 색상, URL 등의 메타 데이터를 포함한다.

해당 이미지가 파비콘의 역할을 하며, 앱 설치나 북마크, 탭 아이콘으로 사용된다.

<br/>

1. 라이브러리 설치하기

```bash
$ npm install gatsby-plugin-manifest
```

<br/>

2. gatsby-config.js 파일에서 설정하기

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `프로젝트 이름`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: './static/favicon.png',
      },
    },
  ],
}
```

<br/>

### 1-2. gatsby-plugin-favicons

해당 라이브러리 역시, 여러 기기와 상황에서 파비콘을 사용할 수 있도록 해주는 라이브러리이지만, 해당 라이브러리를 도입했을 경우, 레포지토리에 push했을 경우, `에러가 발생`했고, `배포 역시 실패`하였다.

<br/>

<p align="center">
    <img src="error.png" alt="error"><br/>
    <span>gatsby-plugin-favicons 도입 시, 에러</span>
</p>

<br/>

> Based on gatsby-plugin-favicon by Creatiwity, but updated to work with Gatsby v2.

<br/>

공식문서를 자세히 읽어보니 Gatsby 버전 2에서 작동하도록 업데이트 되었다는 것이였고, 현재 Gatsby 버전 5로 개발한 나의 블로그 프로젝트에서 dependecy 충돌에러가 발생했던 것이다.

따라서 gatsby-plugin-favicons는 사용하지 않고 gatsby-plugin-manifest를 도입하였다.

<br/>
<br/>

---

## Sources

### - Gatsby 공식문서 : gatsby-plugin-manifest

https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/

### - Gatsby 공식문서 : gatsby-plugin-favicons (에러 유발 가능)

https://www.gatsbyjs.com/plugins/gatsby-plugin-favicons/

### - JeonggonCho_Blog 템플릿 레포지토리

https://github.com/JeonggonCho/JeonggonCho_Blog