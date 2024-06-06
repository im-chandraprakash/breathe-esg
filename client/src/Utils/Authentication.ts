import axios from "axios";
import { setJWT } from "../Reducers/slices/AuthSlice";



interface User {
    email: string;
    password: string;
    confirmPassword: string;
}

interface lUser {
    email: string;
    password: string;
}

export const signupUser = async (userData: User) => {
    try {
        const response = await axios.post(
            "https://breathe-esg.onrender.com/signup",
            userData
        );

        console.log("Signup successful:", response.data);
    } catch (error) {
        console.error("Signup failed:", error);
    }
};

export const loginUser = async (
    userData: lUser,
    navigate: any,
    dispatch: any
) => {
    try {
        const response = await axios.post(
            "https://breathe-esg.onrender.com/login",
            userData
        );

        const token = response?.data?.token;

        if (token) {
            dispatch(setJWT(token));
            navigate("/");
        } else {
            console.error("Login failed: Token not found in response");
            // Handle the case where the token is not present in the response
        }
    } catch (error) {
        console.error("Login failed:", error);
        // Handle other error conditions (e.g., network error, server error)
    }
};
