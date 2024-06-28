import { AxiosResponse } from "axios";
import { ChangePasswordRequest, User } from "../data/interface";
import AxiosClient from "./axiosClient/AxiosClient";

const UserApi = {
    getUserByEmail: async (email: string): Promise<AxiosResponse<User>> => {
        const url = `/user/${email}`;
        return await AxiosClient.get(url);
    },
    getUserById: async (id: string) => {
        const url = `/user/${id}`;
        return await AxiosClient.get(url);
    },
    updateProfile: (user: User, email: string) => {
        const url = `user/${email}`;
        return AxiosClient.put(url, user);
    },
    changePassword: (changePasswordRequest: ChangePasswordRequest) => {
        const url = `user/change-password`;
        return AxiosClient.post(url, changePasswordRequest);
    },
    updateAvatar: (avatar: string, email: string) => {
        const url = `user/avatar/${email}`;
        return AxiosClient.put(url, { avatar });
    },
    activeUser: async (user: User): Promise<AxiosResponse> => {
        const url = `user/active/${user.email}`;
        return await AxiosClient.post(url);
    },
};

export default UserApi;
