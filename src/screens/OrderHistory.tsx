import { ChangeEvent, useEffect, useState } from "react";
import classNames from "../utils/classNames";
import { useNavigate } from "react-router-dom";
import MenuHistory from "../component/menuHistory/menuHistory";

const OrderHistory = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("isLogin") === "true";
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
            <MenuHistory />
        </div>
    );
};

export default OrderHistory;
