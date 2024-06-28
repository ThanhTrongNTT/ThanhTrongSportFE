import { useEffect, useState } from "react";
import { Category } from "../../data/interface";
import CategoryAPI from "../../apis/category.api";
type MenuCategoryProps = {
    categories?: Category[];
    getCategories?: () => void;
    getProductsByCategory: (categoryName: string) => void;
};
const MenuCategory = ({ getProductsByCategory }: MenuCategoryProps) => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        await CategoryAPI.getCategories().then((res) => {
            if (res.data) {
                setCategories(res.data);
            }
        });
    };

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div className="w-1xl grid grid-cols-1">
            <div className="grid grid-cols-2 place-content-between">
                <ul className="grid col-span-1 text-2xl">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className="flex hover:text-gray-400 cursor-pointer"
                            onClick={() =>
                                getProductsByCategory(category.categoryName)
                            }
                        >
                            {category.categoryName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default MenuCategory;
