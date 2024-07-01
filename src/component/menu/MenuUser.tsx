import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const MenuUser = () => {
    const userMenu = [
        {
            id: "account",
            name: "My Account",
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
            id: "my-order",
            name: "My Order",
            options: [
                { value: "2l", label: "2L", checked: false },
                { value: "6l", label: "6L", checked: false },
                { value: "12l", label: "12L", checked: false },
                { value: "18l", label: "18L", checked: false },
                { value: "20l", label: "20L", checked: false },
                { value: "40l", label: "40L", checked: true },
            ],
        },
    ];
    return (
        <div>
            <h1 className="font-bold text-lg">Personal Center</h1>
            {userMenu.map((section) => (
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
                                                key={option.value}
                                                className="flex items-center"
                                            >
                                                <label
                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                    className="ml-3 text-sm text-gray-600"
                                                >
                                                    {option.label}
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
    );
};

export default MenuUser;
