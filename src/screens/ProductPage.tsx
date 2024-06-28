import ProductAPI from "../apis/product.api";
import ProductCard from "../component/card/ProductCard";
import MenuCategory from "../component/menuCategory/MenuCategory";

const ProductPage = () => {
    const getProductsByCategory = async (categoryName: string) => {
        await ProductAPI.serachProductByCategory(
            categoryName,
            0,
            5,
            "createdDate",
            "asc",
        ).then((res) => {
            if (res.data) {
                console.log(res.data);
            }
        });
    };
    return (
        <div className="font-[sans-serif]">
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    Wearing
                </h2>
                <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full grid grid-cols-4">
                    <div className="max-h-fit space-y-4 w-1xl flex flex-col">
                        <MenuCategory
                            getProductsByCategory={getProductsByCategory}
                        />
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
