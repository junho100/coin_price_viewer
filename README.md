# Coin Price Viewer

프론트엔드 개인 프로젝트 <가상화폐 정보 뷰어><br>
API를 통해 전체 가상화폐에서(CoinGecko API 기준) 랜덤한 가상화폐 100개를 보여주고, 클릭 시 가상화폐 정보를 받아와 화면에 랜더링하는 어플리케이션

## Preview

![main](https://user-images.githubusercontent.com/55343124/135835797-20a7c610-8e2e-4f62-91b6-e51e139c3c4a.PNG)
매인화면
![content](https://user-images.githubusercontent.com/55343124/135836134-87f00e1f-2093-4f86-9fce-0992348215ac.PNG)
콘텐츠 화면

## Tech Stack I Used

- HTML
- CSS
- JS
- React
- Hook
- Axios

## Install

git 명령어를 통해 소스코드 다운로드

```
git clone https://github.com/JunhoBaek/coin_price_viewer.git
```

소스코드 다운받은 폴더로 이동

```
cd coin_price_viewer
```

설치 후 실행

```
npm install

npm run start
```

> **본인 실행환경**
>
> - window10
> - VSCode
> - Chrome 94.0.4606.61

## Dependencies

```
{
    "axios": "^0.21.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
}
```

## External Resource

![coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd](https://user-images.githubusercontent.com/55343124/135719484-fe8ecf1c-7f1b-4edc-a2a1-b773ee9dc4fd.png)<br>
CoinGecko API

documentation : https://www.coingecko.com/en/api/documentation

## Discussion & Obstacles

- Only React<br>
  백엔드 서버 없이 프론트 엔드로만 무언가를 구현한다는 것이 한계가 많았다.<br>
  -> 어떤 백엔드를 사용하는 것이 Coin Price Viewer에 적합할까?
- api 호출의 한계<br>
  CoinGecko API 문서를 보면 분당 50번의 요청 제한이 있다. 처음 개발 의도는 모든 가상화폐를 출력하고, 각 각의 정보를 요청받아 저장해서 랜더링 하려 했지만 요청 제한과 성능 문제에 직면했다.<br>
  -> 전체 가상화폐 중 100개만 랜덤으로 받아 해당 가상화폐를 클릭 시 정보를 받아오는 방식으로 구현하여 해결하였다. 따라서 클릭시에만 요청이 API에 전달되기 때문에 요청제한에 걸리는 상황이 적어졌다.

- 화면 구성<br>
  처음 구상할 때에는 오른편 가상화폐 리스트를 보여주는 Component의 너비가 지금의 절반이었다. 이유는 단순히 가상화폐의 리스트를 보여주는 화면이기 때문에 중요도가 떨어진다는 판단 때문이었다. 이 점에서 예상하지 못한 오류가 있었는데, 가상화폐의 이름의 길이가 천차만별이었다. 그래서 화면 밖으로 넘어가는 상황이 자주 발생했다.<br>
  -> 가상화폐 리스트를 보여주는 Component의 너비를 넓혔다. 이름의 길이가 짧은 가상화폐를 보여줄 때에는 외관상 좋지 않기에 추후에 디자인을 수정할 필요가 있다.
