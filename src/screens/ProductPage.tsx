import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import {
    ChevronDownIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import CategoryAPI from "../apis/category.api";
import ProductAPI from "../apis/product.api";
import ProductCard from "../component/card/ProductCard";
import { Category, Product } from "../data/interface";
import { useParams } from "react-router-dom";

let sortOptions = [
    { name: "Most Popular", sortBy: "#", sortDir: "asc", current: false },
    { name: "Best Rating", sortBy: "#", sortDir: "asc", current: false },
    { name: "Newest", sortBy: "createdDate", sortDir: "asc", current: true },
    {
        name: "Price: Low to High",
        sortBy: "price",
        sortDir: "asc",
        current: false,
    },
    {
        name: "Price: High to Low",
        sortBy: "price",
        sortDir: "des",
        current: false,
    },
];

const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: true },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "2l", label: "2L", checked: false },
            { value: "6l", label: "6L", checked: false },
            { value: "12l", label: "12L", checked: false },
            { value: "18l", label: "18L", checked: false },
            { value: "20l", label: "20L", checked: false },
            { value: "40l", label: "40L", checked: true },
        ],
    },
    {
        id: "price",
        name: "Price",
        options: [
            { value: "new-arrivals", label: "Under 10$", checked: false },
            { value: "sale", label: "10$ - 50$ ", checked: false },
            { value: "travel", label: "50$ - 100$", checked: true },
            { value: "organization", label: "100$ - 500%", checked: false },
            { value: "accessories", label: "Over 500$", checked: false },
        ],
    },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { keyword } = useParams<{ keyword?: string }>();

    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");
    const [pageNo, setPageNo] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(6);
    const [totalPages, setTotalPages] = useState(1);
    const [sortBy, setSortBy] = useState<string>("createdDate");
    const [sortDir, setSortDir] = useState<string>("asc");

    const getCategories = async () => {
        await CategoryAPI.getCategories().then((res) => {
            if (res.data) {
                setCategories(res.data);
            }
        });
    };

    const onPageChange = (page: number) => {
        setPageNo(page);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const searchProduct = async () => {
        await ProductAPI.searchProduct(
            categoryName,
            keyword,
            pageNo - 1,
            pageSize,
            sortBy,
            sortDir,
        ).then((res) => {
            if (res.data) {
                setProducts(res.data.content);
                setTotalPages(res.data.totalPages);
            }
        });
    };

    useEffect(() => {
        searchProduct();
    }, [categoryName, keyword, pageNo, pageSize, sortBy, sortDir]);

    // useEffect(() => {
    //     getProductsByCategory();
    // }, [categoryName]);

    return (
        <div className="bg-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 py-3">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Wearing
                    </h1>
                    <div className="flex items-center">
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            {({ focus }) => (
                                                <div
                                                    onClick={() => {
                                                        setSortBy(
                                                            option.sortBy,
                                                        );
                                                        setSortDir(
                                                            option.sortDir,
                                                        );
                                                        sortOptions.forEach(
                                                            (opt) =>
                                                                (opt.current =
                                                                    opt.name ===
                                                                    option.name
                                                                        ? true
                                                                        : false),
                                                        );
                                                    }}
                                                    className={classNames(
                                                        option.current
                                                            ? "font-medium text-gray-900"
                                                            : "text-gray-500",
                                                        focus
                                                            ? "bg-gray-100"
                                                            : "",
                                                        "block px-4 py-2 text-sm",
                                                    )}
                                                >
                                                    {option.name}
                                                </div>
                                            )}
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>
                        <button
                            type="button"
                            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                        >
                            <Squares2X2Icon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
                <section
                    aria-labelledby="products-heading"
                    className="pb-24 pt-6"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <div className="hidden lg:block">
                            <ul
                                role="list"
                                className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                            >
                                {categories.map((category) => (
                                    <li
                                        className="cursor-pointer"
                                        key={category.id}
                                        onClick={() =>
                                            setCategoryName(
                                                category.categoryName,
                                            )
                                        }
                                    >
                                        {category.categoryName}
                                    </li>
                                ))}
                            </ul>
                            {filters.map((section) => (
                                <Disclosure
                                    as="div"
                                    key={section.id}
                                    className="border-b border-gray-200 py-6"
                                >
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">
                                                        {section.name}
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <PlusIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map(
                                                        (option, optionIdx) => (
                                                            <div
                                                                key={
                                                                    option.value
                                                                }
                                                                className="flex items-center"
                                                            >
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={
                                                                        option.value
                                                                    }
                                                                    type="checkbox"
                                                                    defaultChecked={
                                                                        option.checked
                                                                    }
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </label>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                        <div className="w-3xl grid grid-cols-1 col-span-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            ) : (
                                <></>
                            )}
                            <div className="flex items-end justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:col-span-2 lg:col-span-3">
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing{" "}
                                            <span className="font-medium">
                                                {(pageNo - 1) * pageSize + 1}
                                            </span>{" "}
                                            to{" "}
                                            <span className="font-medium">
                                                {pageNo * pageSize}
                                            </span>{" "}
                                            of{" "}
                                            <span className="font-medium">
                                                {products.length}
                                            </span>{" "}
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <Pagination
                                            showIcons={true}
                                            layout="pagination"
                                            currentPage={pageNo}
                                            totalPages={totalPages}
                                            onPageChange={onPageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductPage;
