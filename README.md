## 자 포폴 프론트 end 부분


docker를 이용하여 배포할 예정입니다.

```
docker build -t hprinces2/frontpro:latest .
```

```
docker push hprinces2/frontpro:latest
```


```
docker run -d -p 80:3000 --name myfrontpro hprinces2/frontpro:latest 
```
# 포폴 사이트! 프론트엔드 
typescrip React

## 12.27 1차완료..!
메인페이지,
포폴 포스팅
(이제 서버만들자고)

### 1.9 도커, 깃헙액션해놨음
일단 서버에 도커를 이용하여 리액트를 셋팅
드가자
도커 이미지 생성완료


