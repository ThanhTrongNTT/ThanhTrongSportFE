import { Link, Outlet } from "react-router-dom";
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import classNames from "../utils/classNames";
import { useState } from "react";
type Option = {
    value: string;
    label: string;
    checked: boolean;
};
const MemberProfileLayout = () => {
    const [filters, setFilters] = useState([
        {
            id: "personal-info",
            name: "Personal Info",
            options: [
                { value: "view", label: "Profile", checked: true },
                {
                    value: "order-history",
                    label: "Order History",
                    checked: false,
                },
            ],
        },
        {
            id: "edit-personal-info",
            name: "Edit Personal Info",
            options: [
                { value: "edit", label: "Edit Profile", checked: false },
                {
                    value: "change-password",
                    label: "Change Password",
                    checked: false,
                },
            ],
        },
    ]);
    const handleClickItem = (filterId: string, selectedOption: Option) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter) => ({
                ...filter,
                options: filter.options.map((option) => ({
                    ...option,
                    checked:
                        filter.id === filterId &&
                        option.value === selectedOption.value,
                })),
            })),
        );
    };
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="p-8 bg-white shadow-lg w-full max-w-6xl">
                    <h1 className="text-2xl font-bold">USER INFORMATION</h1>
                    <div className="flex mt-6">
                        {/* Sidebar */}
                        <div className="flex flex-col">
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
                                                    <span className="font-bold text-gray-900">
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
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className={classNames(
                                                                        "ml-3 text-sm text-gray-600 cursor-pointer",
                                                                        option.checked
                                                                            ? "font-bold"
                                                                            : "",
                                                                    )}
                                                                    onClick={() =>
                                                                        handleClickItem(
                                                                            section.id,
                                                                            option,
                                                                        )
                                                                    }
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
                        {/* Main content */}
                        <div className="w-3/4 ml-6 p-4 border">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MemberProfileLayout;
