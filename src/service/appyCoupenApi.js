import { transferAPI } from "@/redux/createAPI";

const applyCoupenApi = transferAPI.injectEndpoints({
    endpoints: (build) => ({
        applyCoupen: build.mutation({
            query: ({ price, code }) => {
                const formData = new FormData();
                formData.append("price", price);
                formData.append("code", code);
                return {
                    url: `user/apply/coupon`,
                    method: "POST",
                    body: formData,
                    formData: true,
                }
            },
        }),
    }),
});

export const { useApplyCoupenMutation } = applyCoupenApi;





