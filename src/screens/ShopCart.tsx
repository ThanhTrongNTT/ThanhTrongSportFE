import { useNavigate } from "react-router-dom";
import OrderCard from "../component/card/OrderCard";
import { useState } from "react";

const ShopCart = () => {
    const navigate = useNavigate();
    const [productPrices, setProductPrices] = useState<number[]>([
        80000, 80000, 80000, 80000,
    ]);
    const handleTotalPrice = (price: number, index: number) => {
        setProductPrices((prevPrices) => {
            const newPrices = [...prevPrices];
            newPrices[index] = price;
            return newPrices;
        });
    };
    return (
        <div className="font-[sans-serif] bg-gray-100 h-screen text-center">
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-3xl font-extrabold text-[#333]">
                    Your shopping bag
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 relative mt-10">
                    <div className="flex flex-col">
                        {[...Array(4)].map((_, index) => (
                            <OrderCard
                                handleTotalPrice={handleTotalPrice}
                                key={index}
                                index={index}
                                price={80000}
                            />
                        ))}
                    </div>
                    <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
                        <h3 className="text-xl font-extrabold [#333] border-b pb-3">
                            Order Summary
                        </h3>
                        <ul className="text-[#333] text-sm divide-y mt-6">
                            <li className="flex flex-wrap gap-4 py-3">
                                Subtotal{" "}
                                <span className="ml-auto font-bold">
                                    $70.00
                                </span>
                            </li>
                            <li className="flex flex-wrap gap-4 py-3">
                                Shipping{" "}
                                <span className="ml-auto font-bold">Free</span>
                            </li>
                            <li className="flex flex-wrap gap-4 py-3 font-bold">
                                Total <span className="ml-auto">$74.00</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="mt-6 text-sm px-6 py-2.5 w-full bg-[#333] hover:bg-[#111] text-white rounded-md"
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
