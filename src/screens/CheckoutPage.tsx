import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LocationApi from "../apis/localtion.api";
import BreadCrumb from "../component/breadcrumb/BreadCrumb";
import OrderCard from "../component/card/OrderCard";
import Dropdown from "../component/dropdown/Dropdown";
import Field from "../component/field/Field";
import Label from "../component/label/Label";

type Ward = {
    Id: string;
    Name: string;
};
type District = {
    Id: string;
    Name: string;
    Wards: Ward[];
};
type Location = {
    Id: string;
    Name: string;
    Districts: District[];
};

const CheckoutPage = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const [productPrices, setProductPrices] = useState<number[]>([
        80000, 80000, 80000, 80000,
    ]);
    const handleTotalPrice = (price: number, index: number) => {
        setProductPrices((prevPrices) => {
            const newPrices = [...prevPrices];
            newPrices[index] = price;
            return newPrices;
        });
    };
    useEffect(() => {
        const sum = productPrices.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(sum);
    }, [productPrices]);

    const {
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();

    // Get Location
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [districts, setDistricts] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>("");
    const [wards, setWards] = useState<string[]>([]);
    const [locationList, setLocationList] = useState<Location[]>([]);

    // Hàm để lấy tất cả các giá trị Name từ danh sách các Location
    const getNamesFromLocations = (locations: Location[]): string[] => {
        let names: string[] = [];

        locations.forEach((location) => {
            // Lấy Name của Location
            names.push(location.Name);
        });

        return names;
    };

    const getNamesFromCities = (locations: District[]): string[] => {
        let names: string[] = [];

        locations.forEach((location) => {
            // Lấy Name của Location
            names.push(location.Name);
        });

        return names;
    };

    const getNamesFromDistrict = (locations: Ward[]): string[] => {
        let names: string[] = [];

        locations.forEach((location) => {
            // Lấy Name của Location
            names.push(location.Name);
        });

        return names;
    };

    const handleCityChange = (event: any) => {
        setSelectedCity(event.target.value);
    };

    const handleDistrictChange = (event: any) => {
        setSelectedDistrict(event.target.value);
    };

    useEffect(() => {
        if (selectedCity) {
            const city = locationList.find(
                (city) => city.Name === selectedCity,
            );
            if (city) {
                setDistricts(getNamesFromCities(city.Districts));
                setSelectedDistrict(null); // Reset selected district when city changes
                setWards([]);
            }
        }
    }, [selectedCity, cities]);

    useEffect(() => {
        const city = locationList.find((city) => city.Name === selectedCity);
        if (selectedDistrict) {
            const district = city?.Districts.find(
                (district) => district.Name === selectedDistrict,
            );
            if (district) {
                setWards(getNamesFromDistrict(district.Wards));
            }
        }
    }, [selectedDistrict, districts]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await LocationApi.getLocations();
                setLocationList(res.data);
                setCities(getNamesFromLocations(res.data));
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="p-10 w-3/4 text-center mx-auto">
            <h2 className="text-5xl font-bold text-center">H&T Store</h2>
            <BreadCrumb />
            <div className="flex justify-center flex-col laptop:flex-row ">
                <div className="laptop:w-2/3 text-center w-full">
                    <span className="font-semibold p-5 text-xl">
                        Thông tin giao hàng
                    </span>
                    <div className="flex justify-center items-center px-5">
                        <form className="form-input border-none flex flex-col gap-4 w-full">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        First Name
                                    </Label>
                                    <Field
                                        control={control}
                                        name="firstName"
                                        id="first-name"
                                        placeholder="Enter First Name..."
                                    >
                                        First Name
                                    </Field>
                                </div>
                                <div className="text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        Last Name
                                    </Label>
                                    <Field
                                        control={control}
                                        name="lastName"
                                        id="last-name"
                                        placeholder="Enter Last Name..."
                                    >
                                        Last Name
                                    </Field>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <div className="text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        Email
                                    </Label>
                                    <Field
                                        control={control}
                                        name="email"
                                        id="email"
                                        placeholder="Enter email..."
                                    >
                                        Email
                                    </Field>
                                </div>
                                <div className="text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        Phone Number
                                    </Label>
                                    <Field
                                        control={control}
                                        name="phoneNumber"
                                        id="phone-number"
                                        placeholder="Enter Phone number..."
                                    >
                                        Số điện thoại
                                    </Field>
                                </div>
                            </div>
                            <div className="text-left">
                                <Label htmlFor="" className="px-2 text-lg">
                                    Address
                                </Label>
                                <Field
                                    control={control}
                                    name="address"
                                    id="address"
                                    placeholder="Enter Address..."
                                >
                                    Address
                                </Field>
                            </div>
                            <div className="grid grid-cols-3 gap-10">
                                <div className="flex flex-col text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        City
                                    </Label>
                                    <Dropdown
                                        className=""
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel="Select location"
                                        name="beginningLocation"
                                        list={cities}
                                        onChange={handleCityChange}
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        District
                                    </Label>
                                    <Dropdown
                                        onChange={handleDistrictChange}
                                        className=""
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel="Select location"
                                        name="beginningLocation"
                                        list={districts}
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        Ward
                                    </Label>
                                    <Dropdown
                                        onChange={handleCityChange}
                                        className=""
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel="Select location"
                                        name="beginningLocation"
                                        list={wards}
                                    />
                                </div>
                            </div>
                            <div className="text-left">
                                <Label htmlFor="" className="px-2 text-lg">
                                    Note
                                </Label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your thoughts here..."
                                ></textarea>
                            </div>
                            <div className="text-left">
                                <Label htmlFor="" className="px-2 text-lg">
                                    Phương thức thanh toán
                                </Label>
                                <div className="h-[150px] border border-gray-400">
                                    <div className="items-center content-center flex justify-items-center border border-b-gray-400 h-1/2 px-10">
                                        <input
                                            checked
                                            id="default-radio-2"
                                            type="radio"
                                            value=""
                                            name="default-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor=""
                                            className="px-2 text-base font-normal"
                                        >
                                            Payment upon delivery (COD)
                                        </label>
                                    </div>
                                    <div className="h-1/2 bg-gray-100 text-center items-center content-center">
                                        Payment upon delivery (COD)
                                    </div>
                                    <div className="text-blue-300 mt-5">
                                        <a href="/cart"> {"< Giỏ hàng"}</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="laptop:w-1/3 laptop:mt-0 border border-gray-400 p-5 w-full bg-gray-100 mt-10">
                    <div>
                        {[...Array(4)].map((_, index) => (
                            <OrderCard
                                key={index}
                                index={index}
                                price={80000}
                                handleTotalPrice={handleTotalPrice}
                            />
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>
                                {" "}
                                {totalPrice.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>
                                {(0).toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total</span>
                            <span>
                                {totalPrice.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </span>
                        </div>
                        <button className="w-full bg-blue-500 text-white p-2 rounded-md mt-5">
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
