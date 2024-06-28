import { Cart } from "../data/interface";
import AxiosClient from "./axiosClient/AxiosClient";

const OrderAPI = {
    getOrderByUser: async (email: string) => {
        const url = `order/${email}`;
        return AxiosClient.get(url);
    },
    addOrder: async (cart: Cart) => {
        const url = `order/add`;
        return AxiosClient.post(url, cart);
    },
};

export default OrderAPI;
