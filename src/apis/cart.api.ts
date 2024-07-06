import { Cart, CartDetail } from "../data/interface";
import AxiosClient from "./axiosClient/AxiosClient";

const CartAPI = {
    addToCart: (email: string, cart: CartDetail) => {
        // Add product to cart
        const url = `cart/${email}/add`;
        return AxiosClient.post(url, cart);
    },
    getCartByUser: (email: string) => {
        // Get cart by user
        const url = `carts/${email}`;
        return AxiosClient.get(url);
    },
    updateCart: (cart: CartDetail) => {
        // Update cart
        const url = `cart/update`;
        return AxiosClient.post(url, cart);
    },
    addCartGuest: (cart: Cart) => {
        // Add cart guest
        const url = `cart/add`;
        return AxiosClient.post(url, cart);
    },
    removeFromCart(email: string, id: string) {
        const url = `cart/${email}/remove`;
        return AxiosClient.post(url, { id });
    },
};

export default CartAPI;
