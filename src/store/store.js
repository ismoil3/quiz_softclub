import { configureStore } from "@reduxjs/toolkit";
import Home from "../reducer/home";


export const store = configureStore(
    {
        reducer:
        {
            Home:Home
        }
    }
)