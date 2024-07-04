import { useEffect, useState } from "react";
import { CartDetail, Product } from "../../data/interface";
import { IconMinus, IconPlus, IconTrash } from "../icon/Icon";
import ImageCustom from "../image/ImageCustom";
import CartAPI from "../../apis/cart.api";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { toast } from "react-toastify";
import { setCarts } from "../../redux/slices/userSlice";

type OrderCardProps = {
    product: Product;
    handleTotalPrice: (price: number, index: number) => void;
    initialQuantity: number;
    index: number;
    price: number;
    id?: string;
};
const OrderCard = (props: OrderCardProps) => {
    const { userInfo } = useAppSelector((state: RootState) => state.user);
    const [quantity, setQuantity] = useState(props.initialQuantity || 1);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (props.initialQuantity)
            props.handleTotalPrice(
                props.price * props.initialQuantity,
                props.index,
            );
    }, []);

    const handleItemCartQuantity = async (
        quantity: number,
        handle: Function,
    ) => {
        await CartAPI.addToCart(userInfo.email, {
            product: props.product,
            quantity,
        })
            .then(async (res) => {
                if (res.data) {
                    await CartAPI.getCartByUser(userInfo.email)
                        .then((res) => {
                            if (res.data) {
                                const carts: CartDetail[] =
                                    res.data.cartDetails || [];
                                dispatch(setCarts(carts));
                                handle();
                            }
                        })
                        .catch((err) => {
                            toast.error(err.message, {
                                autoClose: 500,
                                delay: 10,
                                draggable: true,
                                pauseOnHover: false,
                            });
                        });
                }
            })
            .catch((err) => {
                toast.error(err.message, {
                    autoClose: 500,
                    delay: 10,
                    draggable: true,
                    pauseOnHover: false,
                });
                return;
            });
    };

    const handleRemoveFromCart = async () => {
        if (props.id) {
            await CartAPI.removeFromCart(userInfo.email, props.id)
                .then(async (res) => {
                    if (res.data) {
                        await CartAPI.getCartByUser(userInfo.email)
                            .then((res) => {
                                if (res.data) {
                                    const carts: CartDetail[] =
                                        res.data.cartDetails || [];
                                    dispatch(setCarts(carts));
                                }
                            })
                            .catch((err) => {
                                toast.error(err.message, {
                                    autoClose: 500,
                                    delay: 10,
                                    draggable: true,
                                    pauseOnHover: false,
                                });
                            });
                    }
                })
                .catch((err) => {
                    toast.error(err.message, {
                        autoClose: 500,
                        delay: 10,
                        draggable: true,
                        pauseOnHover: false,
                    });
                });
        }
    };

    const addProduct = () => {
        handleItemCartQuantity(1, () => {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            props.handleTotalPrice(props.price * newQuantity, props.index);
        });
    };
    const minusProduct = () => {
        if (quantity === 1) return;
        handleItemCartQuantity(-1, () => {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            props.handleTotalPrice(props.price * newQuantity, props.index);
        });
    };

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-12 items-center gap-x-4 p-3 w-full">
                <div className="w-20 h-20 col-span-2">
                    <ImageCustom
                        src={
                            props.product.images.length > 0
                                ? props.product.images[0].url
                                : "https://readymadeui.com/images/product1.webp"
                        }
                        alt={props.product.productName}
                        rounded
                    />
                </div>
                <div className="col-span-5">
                    <span className="mx-2">{props.product.productName}</span>
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
                        {(props.price * quantity).toLocaleString("en", {
                            style: "currency",
                            currency: "USD",
                        })}
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
