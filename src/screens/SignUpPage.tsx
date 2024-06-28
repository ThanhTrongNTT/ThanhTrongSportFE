import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useToggleValue from "../component/common/useToggleValue";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Input from "../component/input/Input";
import TogglePassword from "../component/toggle/TogglePassword";
import AuthAPI from "../apis/authentication.api";

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
    confirmPassword: Yup.string()
        .required("Please enter your confirm password")
        .min(8, "Password must be 8 characters"),
});

const SignUpPage = () => {
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    const {
        value: showConfirmPassword,
        handleToggleValue: handleToggleConfirmPassword,
    } = useToggleValue();
    const {
        handleSubmit,
        control,
        setFocus,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schame),
        mode: "onSubmit",
    });

    const handleRegister = async (data: FieldValues) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Confirm password does not match", {
                autoClose: 1000,
                pauseOnHover: false,
                draggable: true,
                delay: 50,
            });
            setFocus("confirmPassword");
            return;
        }
        await AuthAPI.register(data.email, data.password)
            .then((res) => {
                if (res.data) {
                    toast.success(res.message, {
                        autoClose: 10000,
                        pauseOnHover: false,
                        draggable: true,
                        delay: 50,
                    });
                }
            })
            .catch((err) => {
                if (err.status) {
                    toast.error(err.message, {
                        autoClose: 500,
                        delay: 10,
                        draggable: true,
                        pauseOnHover: false,
                    });
                }
            });
        console.log(data);
    };

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
            <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight pt-6 md:text-2xl text-black">
                        Create and account
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(handleRegister)}
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
                                error={errors.password?.message ?? ""}
                            >
                                <TogglePassword
                                    open={showPassword}
                                    onClick={handleTogglePassword}
                                />
                            </Input>
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirm Password
                            </label>
                            <Input
                                variant={"outlined"}
                                control={control}
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                error={errors.confirmPassword?.message ?? ""}
                            >
                                <TogglePassword
                                    open={showConfirmPassword}
                                    onClick={handleToggleConfirmPassword}
                                />
                            </Input>
                        </div>
                        <button
                            type="submit"
                            className="border-2 bg-cyan-300 border-white w-full text-white bg-primary-600 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:text-black hover:duration-500"
                        >
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-400">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="font-medium text-primary-600 hover:bg-sky-300 text-primary-500"
                            >
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
