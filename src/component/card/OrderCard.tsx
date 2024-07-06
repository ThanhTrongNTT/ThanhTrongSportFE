import { useEffect, useState } from "react";
import { CartDetail, Product } from "../../data/interface";
import { IconMinus, IconPlus, IconTrash } from "../icon/Icon";
import ImageCustom from "../image/ImageCustom";
import CartAPI from "../../apis/cart.api";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { toast } from "react-toastify";
import { setCarts } from "../../redux/slices/userSlice";

type OrderCardProps = {
    cartItem: CartDetail;
    handleTotalPrice: (price: number, index: number) => void;
    handleUpdateCart: (cartItem: CartDetail) => void;
    index: number;
    id?: string;
};
const OrderCard = ({
    cartItem,
    handleTotalPrice,
    handleUpdateCart,
    index,
    id,
}: OrderCardProps) => {
    const { userInfo } = useAppSelector((state: RootState) => state.user);
    const [quantity, setQuantity] = useState(cartItem.quantity || 1);

    useEffect(() => {
        if (cartItem.quantity)
            handleTotalPrice(cartItem.product.price * cartItem.quantity, index);
    }, []);

    const handleItemCartQuantity = async () => {};

    const handleRemoveFromCart = async () => {
        if (id) {
            await CartAPI.removeFromCart(userInfo.email, id)
                .then(async (res) => {
                    if (res.data) {
                    }
                })
                .catch((err) => {
                    toast.error(err.message, {
                        autoClose: 1000,
                        delay: 10,
                        draggable: true,
                        pauseOnHover: false,
                    });
                });
        }
    };

    const addProduct = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        handleTotalPrice(cartItem.product.price * newQuantity, index);
        cartItem = {
            ...cartItem,
            quantity: newQuantity,
        };
        handleUpdateCart(cartItem);
    };
    const minusProduct = () => {
        if (quantity === 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        handleTotalPrice(cartItem.product.price * newQuantity, index);
        cartItem = {
            ...cartItem,
            quantity: newQuantity,
        };
        handleUpdateCart(cartItem);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-12 items-center gap-x-4 p-3 w-full">
                <div className="w-20 h-20 col-span-2">
                    <ImageCustom
                        src={
                            cartItem.product.images.length > 0
                                ? cartItem.product.images[0].url
                                : "https://readymadeui.com/images/product1.webp"
                        }
                        alt={cartItem.product.productName}
                        rounded
                    />
                </div>
                <div className="col-span-5">
                    <span className="mx-2">{cartItem.product.productName}</span>
                </div>
                <div className="flex gap-2 col-span-2">
                    <div onClick={minusProduct}>
                        <IconMinus />
                    </div>
                    <span className="h-7 w-8 bg-gray-200 text-center items-center">
                        {quantity}
                    </span>
                    <div onClick={addProduct}>
                        <IconPlus />
                    </div>
                </div>
                <div className="col-span-2">
                    <span>
                        {(cartItem.product.price * quantity).toLocaleString(
                            "en",
                            {
                                style: "currency",
                                currency: "USD",
                            },
                        )}
                    </span>
                </div>
                <div
                    onClick={handleRemoveFromCart}
                    className="col-span-1 flex justify-end"
                >
                    <IconTrash />
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
