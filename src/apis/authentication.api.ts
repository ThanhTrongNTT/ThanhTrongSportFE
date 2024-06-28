import { AxiosResponse } from "axios";
import AxiosClient from "./axiosClient/AxiosClient";
import { LoginData } from "../data/interface";

type APIResponse<T> = {
    code: string;
    message: string;
    result: boolean;
    data: T;
};
const AuthAPI = {
    login: (
        email: string,
        password: string,
    ): Promise<AxiosResponse<LoginData>> => {
        const url = "auth/login";
        return AxiosClient.post(url, { email, password });
    },
    logout: () => {
        const url = "auth/logout";
        return AxiosClient.post(url);
    },
    refreshToken: (refreshToken: string) => {
        const url = `auth/refresh-token`;
        return AxiosClient.post(url, { refreshToken });
    },
    register: (
        email: string,
        password: string,
    ): Promise<APIResponse<boolean>> => {
        const url = "auth/register";
        return AxiosClient.post(url, { email, password });
    },
};

export default AuthAPI;
