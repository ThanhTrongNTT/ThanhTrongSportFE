import AxiosClient from "./axiosClient/AxiosClient";

const UserApi = {
  getUserByEmail: async (email: string) => {
    const url = `/user/${email}`;
    return await AxiosClient.get(url);
  },
  getUserById: async (id: string) => {
    const url = `/user/${id}`;
    return await AxiosClient.get(url);
  },
};

export default UserApi;
