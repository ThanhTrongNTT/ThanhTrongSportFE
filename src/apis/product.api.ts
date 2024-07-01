import { AxiosResponse } from "axios";
import AxiosClient from "./axiosClient/AxiosClient";
import { PageResponse, Product, SearchParams } from "../data/interface";

const ProductAPI = {
    getAllProducts: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ): Promise<PageResponse<Product>> => {
        const url = `products?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    searchProductByName: (
        searchParam: SearchParams,
    ): Promise<PageResponse<Product>> => {
        const url = `products/search-by-name?keyword=${searchParam.keyWord}&pageNo=${searchParam.pageNo}&pageSize=${searchParam.pageSize}&sortBy=${searchParam.sortBy}&sortDir=${searchParam.sortDir}`;
        return AxiosClient.get(url);
    },
    searchProductByCategory: (
        categoryName: string,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ): Promise<PageResponse<Product>> => {
        const url = `products/search-by-category?categoryName=${categoryName}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    searchProductByPrice: (
        minPrice: number,
        maxPrice: number,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ): Promise<AxiosResponse<PageResponse<Product>>> => {
        const url = `products/search-by-price?minPrice=${minPrice}&maxPrice=${maxPrice}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getProductById: (id: string) => {
        const url = `products/${id}`;
        return AxiosClient.get(url);
    },
};

export default ProductAPI;
