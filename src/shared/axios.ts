import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig) =>{
    config.headers!["Content-Type"] = "application/json; charset=utf=8";
    config.headers!["X-Requested-With"] = "XMLHttpRequest";
    config.headers!.Accept = "application/json";
    return config;
})


const api = {
    포트폴리오가져와: ()=> instance.get("/portfolio"),
    포트폴리오넣자: (data:object)=> instance.post("/portfolio", data)
}

export default api;