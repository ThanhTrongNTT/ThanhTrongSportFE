import { Cart } from "../data/interface";
import AxiosClient from "./axiosClient/AxiosClient";

const CartAPI = {
    addToCart: (email: string, cart: Cart) => {
        // Add product to cart
        const url = `cart/${email}/add`;
        return AxiosClient.post(url, cart);
    },
    getCartByUser: (email: string) => {
        // Get cart by user
        const url = `cart/${email}`;
        return AxiosClient.get(url);
    },
    updateCart: (email: string, cart: Cart) => {
        // Update cart
        const url = `cart/${email}/update`;
        return AxiosClient.put(url, cart);
    },
    addCartGuest: (cart: Cart) => {
        // Add cart guest
        const url = `cart/add`;
        return AxiosClient.post(url, cart);
    },
};

export default CartAPI;
