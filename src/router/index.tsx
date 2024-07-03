import { Route, Routes } from "react-router-dom";
import LayoutDefault from "../layout/LayoutDefault";
import HomePage from "../screens/HomePage";
import LoginScreen from "../screens/LoginScreen";
import NotFound from "../screens/NotFound";
import SignUpPage from "../screens/SignUpPage";

import AboutPage from "../screens/AboutPage.tsx";
import CheckoutPage from "../screens/CheckoutPage.tsx";
import ForgotPassword from "../screens/ForgotPassword.tsx";
import OrderHistory from "../screens/OrderHistory.tsx";
import ProductPage from "../screens/ProductPage.tsx";
import ProductView from "../screens/ProductView.tsx";
import ProfilePage from "../screens/ProfilePage.tsx";
import ShopCart from "../screens/ShopCart.tsx";
import MemberProfileLayout from "../layout/MemberProfileLayout .tsx";
import EditProfile from "../screens/Profile/EditProfile.tsx";
import OrderHistoryProfile from "../screens/Profile/OrderHistoryProfile.tsx";
import ChangePassword from "../screens/Profile/ChangePassword.tsx";

const DeclareRouter = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/" />} /> */}

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<LayoutDefault />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:keyword" element={<ProductPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/product/detail/:id" element={<ProductView />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/orderhistory" element={<OrderHistory />} />
            </Route>
            <Route path="/profile" element={<MemberProfileLayout />}>
                <Route path="" element={<ProfilePage />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="order-history" element={<OrderHistoryProfile />} />
                <Route path="change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/order" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default DeclareRouter;
