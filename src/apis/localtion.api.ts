import axios from "axios";

const AxiosClient2 = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: "https://raw.githubusercontent.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

const LocationApi = {
    getLocations: async () => {
        const url = "kenzouno1/DiaGioiHanhChinhVN/master/data.json";
        return AxiosClient2.get(url);
    },
};

export default LocationApi;
