const SignUpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-200">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 pt-6 md:text-2xl text-black">
                        Create and account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 text-black"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name@company.com"
                                // required=""
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 text-black"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // required=""
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900 text-black"
                            >
                                Confirm password
                            </label>
                            <input
                                type="confirm-password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // required=""
                            ></input>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    //   required=""
                                ></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="terms"
                                    className="font-light text-gray-500 dark:text-gray-300"
                                >
                                    I accept the{" "}
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="border-2 bg-cyan-300 border-white w-full text-white bg-primary-600 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:text-black hover:duration-500"
                            // onClick={}
                        >
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500 text-gray-400">
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
