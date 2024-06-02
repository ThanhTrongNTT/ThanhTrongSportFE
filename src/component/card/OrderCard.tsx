import React, { useEffect, useState } from "react";
import ImageCustom from "../image/ImageCustom";
import { IconMinus, IconPlus, IconTrash } from "../icon/Icon";
import { Product } from "../../data/interface";

type OrderCardProps = {
    product?: Product;
    handleTotalPrice: (price: number, index: number) => void;
    initialQuantity?: number;
    index: number;
    price: number;
};
const OrderCard = (props: OrderCardProps) => {
    const [quantity, setQuantity] = useState(props.initialQuantity || 1);

    useEffect(() => {
        if (props.initialQuantity)
            props.handleTotalPrice(
                props.price * props.initialQuantity,
                props.index,
            );
    }, []);

    const addProduct = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        props.handleTotalPrice(props.price * newQuantity, props.index);
    };
    const minusProduct = () => {
        if (quantity === 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        props.handleTotalPrice(props.price * newQuantity, props.index);
    };
    return (
        <div className="flex justify-center items-center">
            <div className="flex items-center gap-x-4 p-5">
                <div className="w-20 h-20">
                    <ImageCustom
                        src="https://pos.nvncdn.com/f01d4a-83461/ps/20230726_9MxDvkuTYm.jpeg"
                        alt="san pham"
                        rounded
                    />
                </div>
                <div className="">
                    <span className="mx-2">
                        Quần Mini Sketch - L - AirForceBlue
                    </span>
                    <IconTrash />
                </div>
                <div className="flex gap-2">
                    <div onClick={minusProduct}>
                        <IconMinus />
                    </div>
                    <span className="h-7 w-8 bg-gray-200 text-center items-center">
                        {quantity}
                    </span>
                    <div onClick={addProduct}>
                        <IconPlus />
                    </div>
                    <span>
                        {(props.price * quantity).toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
