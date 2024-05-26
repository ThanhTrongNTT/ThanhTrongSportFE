import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
            <div className="flex flex-wrap items-center justify-between gap-5 relative">
                <a onClick={() => navigate("/")}>
                    <img src="" alt="logo" className="w-36" />
                </a>
                <div className="flex lg:order-1 max-sm:ml-auto">
                    <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                    <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={() => navigate("/login")}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </button>
                    <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={() => navigate("/cart")}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </button>

                    <button id="toggle" className="lg:hidden ml-7">
                        <svg
                            className="w-7 h-7"
                            fill="#000"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <ul
                    id="collapseMenu"
                    className="lg:!flex max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
                >
                    <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
                        <a
                            onClick={() => navigate("/")}
                            className="lg:hover:text-[#007bff] text-[#007bff] max-lg:text-white block font-semibold text-[15px]"
                        >
                            Home
                        </a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                        <a
                            onClick={() => navigate("/product")}
                            className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                        >
                            Product
                        </a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                        <a
                            onClick={() => navigate("/about")}
                            className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                        >
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
