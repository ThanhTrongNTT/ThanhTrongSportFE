import { AxiosResponse } from "axios";
import { PageResponse, Product } from "../data/interface";
import AxiosClient from "./axiosClient/AxiosClient";

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
    searchProduct: (
        categoryName: string,
        keyWord: string,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ): Promise<PageResponse<Product>> => {
        const url = `products/search-products?keyword=${keyWord}&categoryName=${categoryName}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
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
