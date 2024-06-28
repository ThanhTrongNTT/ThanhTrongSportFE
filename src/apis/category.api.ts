import AxiosClient from "./axiosClient/AxiosClient";

const CategoryAPI = {
    getAllCategory: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ) => {
        const url = `categories?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getCategories: () => {
        const url = `categories/list`;
        return AxiosClient.get(url);
    },
    getCategoryById: (id: string) => {
        const url = `categroies/${id}`;
        return AxiosClient.get(url);
    },
};
export default CategoryAPI;
