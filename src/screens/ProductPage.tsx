import ProductCard from "../component/card/ProductCard";
import MenuCategory from "../component/menuCategory/MenuCategory";

const ProductPage = () => {
    return (
        <div className="font-[sans-serif]">
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                    Wearing
                </h2>
                <div className="grid place-items-center max-h-fit">
                    <img
                        src="https://media.glamour.com/photos/65cce0375ea0c25e5b06764f/master/w_2560%2Cc_limit/spring%25202024%2520fashion%2520trends.jpg"
                        className="size-9/12"
                    ></img>
                </div>
                <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full grid grid-cols-4">
                    <div className="max-h-fit space-y-4 w-1xl flex flex-col">
                        <MenuCategory />
                        <MenuCategory />
                        <MenuCategory />
                        <MenuCategory />
                    </div>
                    <div className="w-3xl grid grid-cols-1 col-span-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
