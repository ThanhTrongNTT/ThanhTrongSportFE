import { Link, useNavigate } from "react-router-dom";
import AuthAPI from "../apis/authentication.api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Input from "../component/input/Input";
import useToggleValue from "../component/common/useToggleValue";
import TogglePassword from "../component/toggle/TogglePassword";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { JWTType, User } from "../data/interface";
import jwtDecode from "jwt-decode";
import { update, updateToken } from "../redux/slices/userSlice";
import UserApi from "../apis/user.api";

const schame = Yup.object({
    email: Yup.string()
        .required("Please enter your emaill address!")
        .matches(
            // eslint-disable-next-line no-control-regex
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            { message: "Please enter valid email address" },
        ),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password must be 8 characters"),
});

type LoginType = {
    email: string;
    password: string;
};
const LoginScreen = () => {
    const dispatch = useAppDispatch();
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    const navigate = useNavigate();
    const handleLogin = async (values: LoginType) => {
        await AuthAPI.login(values.email, values.password)
            .then(async (res) => {
                sessionStorage.setItem("isLogin", "true");
                sessionStorage.setItem("accessToken", res.data.accessToken);
                sessionStorage.setItem("refreshToken", res.data.refreshToken);
                dispatch(
                    updateToken({
                        accessToken: res.data.accessToken,
                        refreshToken: res.data.refreshToken,
                    }),
                );
                await UserApi.getUserByEmail(values.email)
                    .then((res) => {
                        const userProfile: User = res.data;
                        dispatch(update(userProfile));
                        navigate("/");
                        toast.success("Login Success!", {
                            autoClose: 500,
                            delay: 10,
                            draggable: true,
                            pauseOnHover: false,
                        });
                    })
                    .catch((err) => {
                        toast.error(err.message, {
                            autoClose: 500,
                            delay: 10,
                            draggable: true,
                            pauseOnHover: false,
                        });
                    });
            })
            .catch((err) => {
                if (err.status === 404) {
                    toast.error(`User does not esited!`, {
                        autoClose: 500,
                        delay: 10,
                        draggable: true,
                        pauseOnHover: false,
                    });
                }
            });
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schame),
        mode: "onSubmit",
    });

    // Show error nếu có lỗi xảy ra
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0].message) {
                const message = arrErrors[0].message;
                toast.error(message.toString(), {
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
            }
        }
    }, [errors]);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-200">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
                <div
                    className="text-black flex justify-center font-bold text-2xl pt-5 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    Logo
                </div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Log in to your account
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <Input
                                variant={"outlined"}
                                control={control}
                                name="email"
                                type="email"
                                placeholder="Email"
                                error={errors.email?.message ?? ""}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <Input
                                variant={"outlined"}
                                control={control}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                error={errors.email?.message ?? ""}
                            >
                                <TogglePassword
                                    open={showPassword}
                                    onClick={handleTogglePassword}
                                />
                            </Input>
                        </div>
                        <div className="flex items-center justify-between">
                            <Link
                                to={"/forgot-password"}
                                className="text-sm font-medium text-black hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="border-2 bg-cyan-300 border-white w-full text-white bg-primary-600 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:text-black hover:duration-500"
                        >
                            Sign in
                        </button>
                        <p className="text-sm font-light text-gray-400">
                            Don’t have an account yet?{" "}
                            <a
                                href="/signup"
                                className="font-medium text-primary-600 hover:underline text-primary-500"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
