import { createSlice } from "@reduxjs/toolkit";
import { CartDetail, User } from "../../data/interface";

export interface UserState {
    accessToken: string;
    refreshToken: string;
    userInfo: User;
    error: string;
    message: string;
    carts: CartDetail[];
}
const accessToken = sessionStorage.getItem("accessToken");
const refreshToken = sessionStorage.getItem("refreshToken");
const initialState: UserState = {
    accessToken: accessToken || "",
    refreshToken: refreshToken || "",
    userInfo: {
        id: "",
        userName: "",
        email: "",
        password: "",
        activeFlag: false,
        removalFlag: false,
        userProfile: {
            id: "",
            firstName: "",
            lastName: "",
            avatar: {
                id: "",
                fileName: "",
                fileType: "",
                url: "",
                removalFlag: false,
            },
            birthDate: "",
            removalFlag: false,
        },
    },
    error: "",
    message: "",
    carts: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUser: (state) => {
            state.userInfo = initialState.userInfo;
        },
        updateToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        update: (state, action) => {
            state.userInfo = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        resetUserState: (state) => {
            console.log("resetState");
            state.accessToken = "";
            state.refreshToken = "";
            state.userInfo = initialState.userInfo;
            state.message = "";
            state.error = "";
            state.carts = [];
        },
        setCarts: (state, action) => {
            state.carts = action.payload;
        },
    },
});

export const {
    clearUser,
    updateToken,
    update,
    setMessage,
    resetUserState,
    setCarts,
} = userSlice.actions;
export default userSlice.reducer;
