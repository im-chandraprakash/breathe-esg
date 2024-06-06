import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Reducers/store";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Home from "../../pages/Home/Index";
import { getJWTFromStorage } from "../../Reducers/slices/AuthSlice";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJWTFromStorage());
    }, []);
    const token = useSelector((state: RootState) => state.Auth.JWT);

    if (token === null) return <Navigate to="/login" />;

    return <>{children}</>;
};

export default PrivateRoute;
