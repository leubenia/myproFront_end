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