const ShopCart = () => {
  return (
    <div className="font-[sans-serif] bg-gray-100 h-full">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-extrabold text-[#333]">
          Your shopping bag
        </h2>
        <div className="grid lg:grid-cols-3 gap-12 relative mt-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-2 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
              <div className="grid sm:grid-cols-2 items-center gap-4">
                <div className="w-full h-full p-4 shrink-0 bg-gray-100">
                  <img
                    src="https://readymadeui.com/images/product10.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-extrabold text-[#333]">
                    Naruto: Split Sneakers
                  </h3>
                  <hr className="my-6" />
                  <ul className="text-sm text-[#333] space-y-2 list-disc pl-4">
                    <li>UK7.</li>
                    <li>Dutch support for extra comfort.</li>
                    <li>Cushioned insole with soft breathable lining.</li>
                    <li>
                      Upper material is made of PU that is comfortable,
                      lightweight, easy to clean.
                    </li>
                  </ul>
                  <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-4">
                      <h4 className="text-base font-bold text-[#333]">Qty:</h4>
                      <button
                        type="button"
                        className="bg-transparent py-2 font-semibold text-[#333]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-transparent py-2 font-semibold text-[#333]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#333]">$70.00</h4>
                    </div>
                  </div>
                  <div className="divide-x border-y mt-6 grid grid-cols-2 text-center">
                    <button
                      type="button"
                      className="bg-transparent font-semibold py-3 text-gray-500 text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current mr-2 inline-block"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"
                        ></path>
                      </svg>
                      View details
                    </button>
                    <button
                      type="button"
                      className="bg-transparent font-semibold py-3 text-gray-500 text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current mr-2 inline-block"
                        viewBox="0 0 320.591 320.591"
                      >
                        <path
                          d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                          data-original="#000000"
                        ></path>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
            <h3 className="text-xl font-extrabold [#333] border-b pb-3">
              Order Summary
            </h3>
            <ul className="text-[#333] text-sm divide-y mt-6">
              <li className="flex flex-wrap gap-4 py-3">
                Subtotal <span className="ml-auto font-bold">$70.00</span>
              </li>
              <li className="flex flex-wrap gap-4 py-3">
                Shipping <span className="ml-auto font-bold">Free</span>
              </li>
              <li className="flex flex-wrap gap-4 py-3">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 py-3 font-bold">
                Total <span className="ml-auto">$74.00</span>
              </li>
            </ul>
            <button
              type="button"
              className="mt-6 text-sm px-6 py-2.5 w-full bg-[#333] hover:bg-[#111] text-white rounded-md"
            >
              Check out
            </button>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-base font-bold [#333] mb-2">
                  Secure payment
                </h4>
                <p className="text-sm text-[#333]">
                  Experience peace of mind with our secure payment options,
                  ensuring your transactions are protected and reliable.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold [#333] mb-2">
                  Free delivery
                </h4>
                <p className="text-sm text-[#333]">
                  Enjoy the convenience of free delivery on all your orders,
                  providing a cost-effective and seamless shopping experience.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold [#333] mb-2">
                  Easy to return
                </h3>
                <p className="text-sm text-[#333]">
                  Simplify your shopping experience with hassle-free returns.
                  Our easy return process ensures convenience and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
