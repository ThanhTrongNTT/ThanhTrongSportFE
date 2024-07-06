import { useNavigate } from "react-router-dom";
import OrderCard from "../component/card/OrderCard";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { CartDetail } from "../data/interface";
import CartAPI from "../apis/cart.api";
import { setCarts } from "../redux/slices/userSlice";
import { toast } from "react-toastify";

const ShopCart = () => {
    const { userInfo } = useAppSelector((state: RootState) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [carts, setCartsShop] = useState<CartDetail[]>([]);
    useEffect(() => {
        if (userInfo.email === "") {
            navigate("/login");
        }
    }, [userInfo, navigate]);

    const [productPrices, setProductPrices] = useState<number[]>(
        carts.map((cart) => {
            return cart.product.price;
        }),
    );
    const getCartUser = async () => {
        await CartAPI.getCartByUser(userInfo.email)
            .then((res) => {
                if (res.data) {
                    const carts: CartDetail[] = res.data.cartDetails || [];
                    setCartsShop(carts);
                    dispatch(setCarts(carts));
                }
            })
            .catch((err) => {
                toast.error(err.message, {
                    autoClose: 50000,
                    delay: 10,
                    draggable: true,
                    pauseOnHover: false,
                });
            });
    };
    const handleUpdateCart = async (cartItem: CartDetail) => {
        await CartAPI.updateCart(cartItem).then(async (res) => {
            if (res.data) {
                await getCartUser();
                toast.success("Update Quantity Success!", {
                    autoClose: 1000,
                    delay: 10,
                    draggable: true,
                    pauseOnHover: false,
                });
            }
        });
    };
    const handleRemoveFromCart = async (id: string) => {
        await CartAPI.removeFromCart(userInfo.email, id)
            .then(async (res) => {
                if (res.data) {
                    await getCartUser();
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
    };
    const handleTotalPrice = (price: number, index: number) => {
        setProductPrices((prevPrices) => {
            const newPrices = [...prevPrices];
            newPrices[index] = price;
            return newPrices;
        });
    };
    useEffect(() => {
        getCartUser();
    }, []);
    return (
        <div className="font-[sans-serif] bg-gray-100 h-screen text-center">
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-3xl font-extrabold text-[#333]">
                    Your shopping bag
                </h2>
                <div className="grid lg:grid-cols-2 gap-8 mt-10">
                    <div className="flex flex-col">
                        {carts.length > 0 ? (
                            carts.map((cartItem: CartDetail, index: number) => (
                                <OrderCard
                                    cartItem={cartItem}
                                    handleTotalPrice={handleTotalPrice}
                                    handleUpdateCart={handleUpdateCart}
                                    key={index}
                                    index={index}
                                    id={cartItem.id}
                                />
                            ))
                        ) : (
                            <span className="text-xl font-semibold">
                                No products to checkout.
                            </span>
                        )}
                    </div>
                    <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                        <h3 className="text-xl font-extrabold [#333] border-b pb-3">
                            Order Summary
                        </h3>
                        <ul className="text-[#333] text-sm divide-y mt-6">
                            <li className="flex flex-wrap gap-4 py-3">
                                Subtotal{" "}
                                <span className="ml-auto font-bold">
                                    {productPrices
                                        .reduce((sum, price) => sum + price, 0)
                                        .toLocaleString("en", {
                                            style: "currency",
                                            currency: "USD",
                                        })}
                                </span>
                            </li>
                            <li className="flex flex-wrap gap-4 py-3">
                                Shipping{" "}
                                <span className="ml-auto font-bold">Free</span>
                            </li>
                            <li className="flex flex-wrap gap-4 py-3 font-bold">
                                Total{" "}
                                <span className="ml-auto">
                                    {productPrices
                                        .reduce((sum, price) => sum + price, 0)
                                        .toLocaleString("en", {
                                            style: "currency",
                                            currency: "USD",
                                        })}
                                </span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            disabled={carts.length === 0}
                            className={`mt-6 text-sm px-6 py-2.5 w-full bg-[#333] text-white rounded-md ${carts.length === 0 ? "bg-gray-400" : "hover:bg-[#111]"}`}
                            onClick={() => navigate("/order")}
                        >
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
