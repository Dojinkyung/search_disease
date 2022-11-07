# ✨질병 검색기✨

# 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://stunning-kulfi-cc5809.netlify.app)

# 🔧 기술 스택

- Typescript
- React
- Redux-toolkit
- Axios
- SCSS

## 📦 폴더 구조

```sh
📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs #svg
 ┣ 📂components
 ┃ ┣ 📜Highlighted # 검색 단어 볼드처리
 ┃ ┣ 📜index # 검색과 결과
 ┃ ┣ 📜LoadingOrNoSearch # 로딩과 검색결과 없을 때
 ┃ ┗ 📜searchItem # 검색 결과 리스트
 ┣ 📂page # 출력 화면
 ┣ 📂redux # redux slice와 store
 ┣ 📂services # 데이터 불러오는 컴포넌트
 ┣ 📂styles # CSS 스타일을 위한 폴더
 ┗ 📂types # Typescript 정의 파일

```

# 📌 실행 방법

## 1. 설치

```
git clone https://github.com/Dojinkyung/search_disease.git
```

```
yarn install && yarn start
```

## 2. 📸 화면
![모바일](https://user-images.githubusercontent.com/63532503/200252821-3e4a62f4-e9df-4d17-993c-eacbb460d825.gif)

# 💡 구현 내용

## 1. 공공데이터 활용

~~https://www.data.go.kr/iim/api/selectAPIAcountView.do~~

~~건강보험심사평가원\_질병정보서비스를 이용하여 질병을 검색할 수 있는 페이지를 만들었습니다.~~ -> 데이터 폐기

https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=3033869

질병관리청\_ 임상연구 DB를 이용하여 임상연구를 검색할 수 있도록 하였습니다.

## 2. mark 처리

검색결과에 검색 단어를 표시해 주었습니다.

# ✏️ 어려웠던 점+ 추가할 기능

- 키보드로 검색어를 up, down하는 기능을 구현하는 부분이 어려웠습니다.

- 키보드로 선택된 검색어를 검색창에 보여주는 기능을 구현 중에 있습니다.
