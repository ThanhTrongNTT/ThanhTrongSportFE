import { ChangeEvent, useEffect, useState } from "react";
import classNames from "../utils/classNames";
import { useNavigate } from "react-router-dom";
import MenuHistory from "../component/menuHistory/menuHistory";
import BarCodeHistory from "../component/menuHistory/BarCodeHistory";

const OrderHistory = () => {
    const navigate = useNavigate();
    const isLogin = sessionStorage.getItem("isLogin") === "true";
    const [disable, setDisable] = useState<boolean>(true);

    const [images, setImages] = useState<Array<string | File>>([]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                const newImage = e.target.files[i];
                setImages((images) => [...images, newImage]);
            }
        }
    };
    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="grid grid-cols-4 mb-4 max-w-2xl sm:mx-auto mx-4 laptop:w-full mt-10 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="flex flex-col">
                <MenuHistory />
                <MenuHistory />
                <MenuHistory />
            </div>
            <div className="grid grid-row-3 col-span-3">
                <h1 className="grid grid-cols-1">Order History</h1>
                <BarCodeHistory />
                <BarCodeHistory />
                <BarCodeHistory />
                <BarCodeHistory />
            </div>
        </div>
    );
};

export default OrderHistory;
