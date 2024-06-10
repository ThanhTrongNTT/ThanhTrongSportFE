import { ChangeEvent, useEffect, useState } from "react";
import classNames from "../utils/classNames";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
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
        <div className="mb-4 max-w-2xl mx-auto mx-4 laptop:w-full mt-10 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                    className="object-cover object-top w-full"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                ></img>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                    className="object-cover object-center h-32"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Woman looking front"
                ></img>
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">Sarah Smith</h2>
                <p className="text-gray-500">Freelance Web Designer</p>
            </div>
            <form className="px-4 mt-4 border-t">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col mb-4">
                        <label>
                            Họ
                            <span className="block text-xs font-light text-stone-400">
                                First Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Smith"
                            className="mt-2 px-4 py-2 shadow rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label>
                            Tên
                            <span className="block text-xs font-light text-stone-400">
                                Last Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Sarah"
                            className="mt-2 px-4 py-2 shadow rounded"
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="SarahSmith@gmail.com"
                        className="mt-2 px-4 py-2 shadow rounded"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label>
                        Số Điện Thoại
                        <span className="block text-xs font-light text-stone-400">
                            Phone Numbers
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="+84 *********"
                        className="mt-2 px-4 py-2 shadow rounded"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label>
                        Mật Khẩu
                        <span className="block text-xs font-light text-stone-400">
                            Password
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="*********"
                        className="mt-2 px-4 py-2 shadow rounded"
                    />
                </div>
                <div className="mt-10 text-left flex items-center">
                    <input
                        type="file"
                        multiple
                        onChange={handleChange}
                        className="w-2/4 px-4 py-2 rounded-lg border border-c6"
                    />
                    <button
                        type="button"
                        // onClick={uploadFireBase}
                        className={classNames(
                            "ml-4 h-12 w-[130px] rounded-md text-white font-semibold",
                            disable
                                ? "bg-gradient-to-br from-orange-500 to-pink-500"
                                : "bg-gradient-to-br from-orange-200 to-pink-200 cursor-no-drop",
                        )}
                    >
                        {disable ? (
                            "Update Avatar"
                        ) : (
                            <div className="flex items-center justify-center">
                                <div className="w-7 h-7 bg-transparent border-[3px] border-t-[3px] border-t-transparent animate-spin border-white rounded-full"></div>
                            </div>
                        )}
                    </button>
                </div>
            </form>
            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 border border-black block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 hover:bg-gray-100 hover:text-black hover:transition-opacity hover:border hover:border-gray-200">
                    Update User
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
