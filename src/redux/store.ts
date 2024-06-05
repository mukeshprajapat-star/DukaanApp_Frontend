import { configureStore } from "@reduxjs/toolkit"
import { userAPI } from "./api/userAPI"
import { userReducer } from "./reducer/userReducer";
import { productAPI } from "./api/productAPI";
import { cartReducer } from "./reducer/cartReducer";
import { OrderAPI } from "./api/orderAPI";
import { dashboardAPI } from "./api/dashboardAPI";

export const server=import.meta.env.VITE_SERVER

export const store=configureStore({
    reducer:{
        [userAPI.reducerPath]:userAPI.reducer,
        [productAPI.reducerPath]:productAPI.reducer,
        [OrderAPI.reducerPath]:OrderAPI.reducer,
        [dashboardAPI.reducerPath]:dashboardAPI.reducer,



        [userReducer.name]:userReducer.reducer,
        [cartReducer.name]:cartReducer.reducer,

    },
    middleware:(Middleware)=>Middleware().concat(userAPI.middleware,productAPI.middleware,OrderAPI.middleware,dashboardAPI.middleware)
});


export type RootState=ReturnType<typeof store.getState>

