import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";

const AppRoutes = () => (
    <Routes >
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
        </Routes >
);
   
export default AppRoutes;