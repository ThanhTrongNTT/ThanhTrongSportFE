import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import SignUpPage from "../screens/SignUpPage";
import HomePage from "../screens/HomePage";
import LayoutDefault from "../layout/LayoutDefault";
import NotFound from "../screens/NotFound";

import ProductPage from "../screens/ProductPage.tsx";
import ProductView from "../screens/ProductView.tsx";
import ShopCart from "../screens/ShopCart.tsx";
import ProfilePage from "../screens/ProfilePage.tsx";

const DeclareRouter = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/" />} /> */}

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route element={<LayoutDefault />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/product/detail" element={<ProductView />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default DeclareRouter;
