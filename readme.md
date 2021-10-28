### 오픈 그래프 속성
    
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Starbucks" />
    <meta property="og:title" content="Starbucks Coffee Korea" />
    <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
    <meta property="og:image" content="./images/starbucks_seo.jpg" />
    <meta property="og:url" content="https://starbucks.co.kr" />
    
+ og:type: 페이지의 유형(E.g, website, video.movie)
+ og:site_name: 속한 사이트의 이름
+ og:title: 페이지의 이름(제목)
+ og:description: 페이지의 간단한 설명
+ og:image: 페이지의 대표 이미지 주소(URL)
+ og:url: 페이지 주소(URL)

    flex-grow : 최대한 늘어나라


** padding-top 을 퍼센트로 지정하면 부모요소의 너비값에 영향을 받음
16:9 비율 padding-top : 56.25%

## 랜덤한 숫자를 생성하는 함수
 
    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min ,max){
        // ',toFixed()'를 통해 반환된 문자 데이터를,
        // 'parseFloat()'를 통해 소수점을 가지는 숫자 데이터로 변환
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }