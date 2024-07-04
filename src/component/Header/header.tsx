import Tippy from "@tippyjs/react/headless";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store";
import Avt from "../avt/Avt";
import { IconArrowDown } from "../icon/Icon";
import Menu from "../menu/Menu";
import { useState } from "react";

const Header = () => {
    const { userInfo, carts } = useAppSelector(
        (state: RootState) => state.user,
    );

    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = sessionStorage.getItem("isLogin") === "true";
    const [keyword, setKeyword] = useState<string>();

    const navItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Product",
            path: "/product",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Support",
            path: "/support",
        },
    ];

    return (
        <div className="bg-white sticky top-0 z-50">
            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Welcome to Sport Shop! How can I help you?
                </p>
                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <div onClick={() => navigate("/")}>
                                    <img
                                        className="h-8 w-auto cursor-pointer"
                                        src="Logo/logo.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => navigate(item.path)}
                                            className={` text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out cursor-pointer ${item.path === location.pathname || (location.pathname.startsWith("/product") && item.path === "/product") ? "border-indigo-600 text-indigo-600" : "border-transparent"}`}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {isLogin ? (
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-2">
                                                <Avt
                                                    sx="default"
                                                    src={
                                                        userInfo.userProfile
                                                            .avatar.url ||
                                                        "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                                    }
                                                />
                                                <div className="flex items-center">
                                                    <p className="text-black">
                                                        {userInfo.userProfile
                                                            .firstName &&
                                                            "" +
                                                                " " +
                                                                userInfo
                                                                    .userProfile
                                                                    .lastName &&
                                                            ""}
                                                    </p>
                                                    <Tippy
                                                        interactive
                                                        delay={[0, 200]}
                                                        offset={[0, 10]}
                                                        // visible
                                                        render={(
                                                            attrs: any,
                                                        ) => (
                                                            <div
                                                                className="w-[238px] rounded-2xl"
                                                                tabIndex={-1}
                                                                {...attrs}
                                                            >
                                                                <Menu />
                                                            </div>
                                                        )}
                                                    >
                                                        <span className="cursor-pointer px-2 py-4 text-black">
                                                            <IconArrowDown />
                                                        </span>
                                                    </Tippy>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div
                                                onClick={() =>
                                                    navigate("/login")
                                                }
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                                            >
                                                Sign in
                                            </div>
                                            <span
                                                className="h-6 w-px bg-gray-200"
                                                aria-hidden="true"
                                            ></span>
                                            <div
                                                onClick={() =>
                                                    navigate("/signup")
                                                }
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer pr-3"
                                            >
                                                Create account
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="hidden lg:flex">
                                    <div className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img
                                            src="Logo/icon_VN.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">
                                            VIE
                                        </span>
                                    </div>
                                </div>
                                <div className="lg:ml-8 flex items-center border border-gray-300 rounded-xl">
                                    <div className="flex items-center text-gray-700 hover:text-gray-800">
                                        <input
                                            type="text"
                                            id="keyword"
                                            onChange={(e) =>
                                                setKeyword(e.target.value)
                                            }
                                            className="outline-none border-none focus:shadow-none bg-transparent"
                                        />
                                    </div>
                                    <div className="flex">
                                        <div
                                            onClick={() =>
                                                navigate(`/product/${keyword}`)
                                            }
                                            className="p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4 flow-root lg:ml-6">
                                    <div className="group -m-2 flex items-center p-2 cursor-pointer">
                                        <svg
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            onClick={() => navigate("/cart")}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                            />
                                        </svg>
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                            {carts.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
