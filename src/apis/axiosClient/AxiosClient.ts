import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const AxiosClient = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: "http://localhost:8081/api/v1/",
    headers: {
        "Content-Type": "application/json",
    },
});
// @ts-ignore
AxiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const accessToken = await localStorage.getItem("token");
    if (accessToken)
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
        };
    return await config;
});
AxiosClient.interceptors.response.use(
    async (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    async (error) => {
        console.log(error);
        if (!error.response.data) {
            toast.error(error.message, {
                autoClose: 1000,
                delay: 10,
                draggable: true,
                pauseOnHover: false,
            });
        } else {
            toast.error(error.response.data.message, {
                autoClose: 1000,
                delay: 10,
                draggable: true,
                pauseOnHover: false,
            });
        }

        if (error.response.status === 401) {
            const prevRequest = error.config;
            const refreshToken = await localStorage.getItem("refreshToken");
            prevRequest.sent = true;
            console.log("refreshToken: ", refreshToken);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const newAccessToken = await axios.post(
                `http://localhost:8081/api/v1/token/${refreshToken}`,
                config,
            );
            console.log("newAccessToken", newAccessToken);
            if (newAccessToken.data.data.accessToken) {
                localStorage.setItem(
                    "token",
                    newAccessToken.data.data.accessToken,
                );
            }
        }

        if (!error.response.status) {
            return error.message;
        }
        return error;
    },
);
export default AxiosClient;
