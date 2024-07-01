import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
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
        <>
            <div className="">
                <h2 className="text-xl font-bold">PROFILE</h2>
                <div className="mt-4">
                    <p className="font-bold">EMAIL ADDRESS</p>
                    <p>tronglagi111222@gmail.com</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold">GENDER</p>
                    <p>Nam</p>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
