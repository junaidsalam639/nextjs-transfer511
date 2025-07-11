import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const transferAPI = createApi({
    reducerPath: "transferAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://j46.e0c.mytemp.website/api",
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token') || ""}`,
        }
    }),
    tagTypes: ["cars", "coupons", "booking"],
    endpoints: () => ({}),
});

